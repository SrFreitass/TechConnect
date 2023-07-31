import { db } from "../../firebaseconfig";
import { collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react";
import { useEffect, useState } from 'react'
import { NewsStyled } from "../SectionNews/style";
import { ButtonStyled } from "../SectionMain/style";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

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

    const handleDeleteArticle = (id) => {
        const articleDoc = doc(db, "articles", id)
        deleteDoc(articleDoc)
        toast.success('Artigo excluído com sucesso')
    }

    return (
        <>
            <Toaster
                position="bottom-left"
            />
            {newsEdit.map((news, index) => {
                return (
                    <NewsStyled key={index}>
                        <img src={news.imageURL}></img>
                        <div>
                            <h1>{news.title}</h1>
                            <h2>{news.summary}</h2>
                            <p>{news.author}</p>
                            <p>{news.emphasis.toString()}</p>
                            <ButtonStyled><Link to={`./${news.title}`}>Editar</Link></ButtonStyled>
                            <ButtonStyled onClick={() => { handleDeleteArticle(news.id) }}>Excluir</ButtonStyled>
                        </div>
                    </NewsStyled>
                )
            })}
        </>
    )
}