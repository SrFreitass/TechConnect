import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection, where, query, startAfter, limit, } from "firebase/firestore";
import { ArticleStyled } from "../ArticleBody/style";
import { ButtonStyled } from "../SectionMain/style";
import DOMPurify from "dompurify";
import { Loader } from "../Loader";

export function SearchContainer() {
    const [newsResults, setNewsResults] = useState([]);
    const userCollectionRef = collection(db, "articles");
    const [visibleItems, setVisibleItems] = useState(4);
    const { searchTitle } = useParams();
    const [componentReady, setComponentReady] = useState()

 
    useEffect(() => {
        const getData = async () => {
            const q = query(userCollectionRef, where("title", ">=", searchTitle), limit(5));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.docs.length === 0) {
                console.log('Não há resultados')
                const queryEmphasis = query(userCollectionRef, where("emphasis", "==", true))
                console.log(queryEmphasis)
                const querySnapshot1 = await getDocs(queryEmphasis)
                console.log(querySnapshot1)
                const data = querySnapshot1.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                console.log(data)
                setNewsResults(data);
                setComponentReady(false)
                return
            }

            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setNewsResults(data);
            setVisibleItems(querySnapshot.docs[querySnapshot.docs.length - 1])
            console.log(querySnapshot.docs[querySnapshot.docs.length - 1])
            setComponentReady(true)
            
        };
        getData();
    }, [searchTitle]);

    console.log(newsResults)

    const HandleClickNews = async () => {
        const q = query(userCollectionRef, where("title", ">=", searchTitle), startAfter(visibleItems), limit(5));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNewsResults([...data, ...newsResults]);
        setVisibleItems(querySnapshot.docs[querySnapshot.docs.length - 1])
    };

    if (componentReady) {
        return (
            <div>
                <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchTitle) }} />
                {newsResults.map((article, index) => {
                    return (
                        <NewsStyled key={index}>
                            <img src={article.imageURL} alt="" />
                            <div>
                                <Link to={`../home/news/${article.id}`}>
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
    } else if(componentReady == false) {
        return (
            <div>
                <p>Nenhum resultado encontrado para "{searchTitle}"</p>
                <div>
                <h2>Artigos em destaque</h2>
                {newsResults.map((article, index) => {
                    return (
                        <NewsStyled key={index}>
                            <img src={article.imageURL} alt="" />
                            <div>
                                <Link to={`../home/news/${article.id}`}>
                                    <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }} />
                                </Link>
                                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.summary) }} />
                                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.author) }} />
                            </div>
                        </NewsStyled>
                    );
                })}
                <br />
                <ButtonStyled><Link to={'../home'}>Voltar ao início</Link></ButtonStyled>
            </div>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }


}
