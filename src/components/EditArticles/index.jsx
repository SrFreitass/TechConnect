import { db } from "../../firebaseconfig";
import { collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { NewsStyled } from "../SectionNews/style";
import { ButtonStyled } from "../SectionMain/style";
import { Link } from "react-router-dom";

export function EditArticles() {
    const [newsEdit, setNewsEdit] = useState([])
    const userCollectionRef = collection(db, "articles");

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(userCollectionRef);
            setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, [newsEdit]);

    const handleDeleteArticle = async (id) => {
        const articleDoc = doc(db, "articles", id)
        await deleteDoc(articleDoc)
        console.log(postDoc)
    }

    return (
        <>
            {newsEdit.map((news, index) => {
                return (
                    <NewsStyled> 
                        <NewsStyled key={index}>
                            <img src={news.bannerURL}></img>
                            <div>
                                <h1>{news.title}</h1>
                                <h2>{news.summary}</h2>
                                <p>{news.author}</p>
                                <p>{news.emphasis.toString()}</p>
                                <ButtonStyled><Link to={`./${news.title}`}>Editar</Link></ButtonStyled>
                                <ButtonStyled onClick={() => {handleDeleteArticle(news.id)}}>Excluir</ButtonStyled>
                            </div>
                        </NewsStyled>    
                    </NewsStyled>
                )
            })}
        </>
    )
}