import { db } from "../../firebaseconfig";
import { collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react";
import { useEffect, useState } from 'react'
import { NewsStyled, ButtonsContainer } from "../SectionNews/style";
import { ButtonStyled } from "../SectionMain/style";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from "../Loader";
import { SectionAdminStyled } from './style'
import DOMPurify from "dompurify";

export function SectionAdmin() {
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
        <SectionAdminStyled>
            <Toaster
                position="bottom-left"
            />
            {newsEdit.map((news, index) => {
                return (
                    <NewsStyled key={index}>
                        <img src={news.imageURL}></img>
                        <div>
                            <div>
                                <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.title) }} />
                                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.summary) }} />
                                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.author) }} />
                                <p>Destaque: {news.emphasis.toString()}</p>
                            </div>
                            <ButtonsContainer>
                                <ButtonStyled><Link to={`./edit/${news.title}`}>Editar</Link></ButtonStyled>
                                <ButtonStyled onClick={() => { handleDeleteArticle(news.id) }}>Excluir</ButtonStyled>
                            </ButtonsContainer>
                        </div>
                    </NewsStyled>
                )
            })}
        </SectionAdminStyled>
    )
}