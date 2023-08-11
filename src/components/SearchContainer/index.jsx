import { NewsStyled } from "../SectionNews/style";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection, where, query, orderBy, startAt, endAt } from "firebase/firestore";
import { ArticleStyled } from "../BodyNews/style";
import { ButtonStyled } from "../SectionMain/style";
import DOMPurify from "dompurify";
import { Loader } from "../Loader";

export function SearchContainer() {
    const [newsResult, setResults] = useState([]);
    const userCollectionRef = collection(db, "articles");
    const [visibleItems, setVisibleItems] = useState(4);
    const { searchTitle } = useParams();
    const [componentReady, setComponentReady] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const q = query(userCollectionRef, where("title", ">=", searchTitle));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.docs.length === 0) {
                console.log('Não há resultados')
                return;
            }
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const dataFilter = data.filter((r) => {
                return r.title.includes(searchTitle)
            })
            setResults(dataFilter);
            setComponentReady(true)
        };
        getData();
    }, [searchTitle]);


    const HandleClickNews = () => {
        setVisibleItems(visibleItems + 5);
    };

    if (componentReady) {
        return (
            <div>
                <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchTitle) }} />
                {newsResult.slice(0, visibleItems).map((article, index) => {
                    return (
                        <NewsStyled key={index}>
                            <img src={article.imageURL} alt="" />
                            <div>
                                <Link to={`../home/news/${article.title}`}>
                                    <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }} />
                                </Link>
                                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.summary) }} />
                                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.author) }} />
                            </div>
                        </NewsStyled>
                    );
                })}
                <ButtonStyled onClick={HandleClickNews}>Ler mais</ButtonStyled>
            </div>
        );
    } else {
        return (
            <Loader />
        )
    }
}


