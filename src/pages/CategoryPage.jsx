import { query, collection, where, getDocs, orderBy } from "firebase/firestore"
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
import { Articles } from "../components/common/Articles"

export function CategoryPage() {

    const { tag } = useParams()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticleData = async () => {
            const q = query(collection(db, "articles"), where("category", "==", tag), orderBy('date', 'desc'));
            const querySnapshot = await getDocs(q)
            setArticles(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        fetchArticleData()

    }, [tag])

    const HandleClickNews = async () => {  

    }

    console.log(articles)

    return (
        <Wrapper>
            <Header />
            <h2 style={{ color: '#8A8AE0' }}>{`#${tag}`}</h2>
            <Articles articlesList={articles} />
        </Wrapper>
    )
}