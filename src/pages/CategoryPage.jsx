import { query, collection, where, getDocs } from "firebase/firestore"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../services/firebaseconfig"
import { useState } from "react"
import { Header } from "../components/Header"
import { Wrapper } from "../Styles/Wrapper"
import { NewsStyled } from '../components/ArticleFeed/style'
import { Link } from "react-router-dom";
import { ArticleStyled } from "../components/ArticleBody/style";
import { ButtonStyled } from "../components/SectionMain/style";
import DOMPurify from "dompurify";

export function CategoryPage() {

    const { tag } = useParams()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticleData = async () => {
            const q = query(collection(db, "articles"), where("category", "==", tag));
            const querySnapshot = await getDocs(q)
            setArticles(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        fetchArticleData()

    }, [tag])

    console.log(articles)

    return (
        <Wrapper>
            <Header />
            <h1>{`#${tag}`}</h1>
            {
                articles.map((article, index) => {
                    return (
                        <>
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
                        </>
                    )
                })
            }
        </Wrapper>
    )
}