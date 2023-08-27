import { db } from "../../services/firebaseconfig";
import { collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react";
import { useEffect, useState } from 'react'
import { NewsStyled, ButtonsContainer } from "../ArticleFeed/style";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from "../Loader";
import { SectionAdminStyled } from './style'
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleComposer/style";
import { OperationType } from "firebase/auth";

export function SectionAdmin() {
    const [newsEdit, setNewsEdit] = useState([])
    const userCollectionRef = collection(db, "articles");

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(userCollectionRef);
            setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, []);


    const handleDeleteArticle = (id) => {
        const articleDoc = doc(db, "articles", id)
        deleteDoc(articleDoc)
        toast.success('Artigo excluído com sucesso')
    }

    const handleFilterArticle = async (e) => {
        if (e.target.value == 'false') {
            const data = await getDocs(userCollectionRef);
            setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            return
        }

        const q = query(userCollectionRef, where("category", "==", e.target.value))
        const data = await getDocs(q);
        const dataFilterd = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setNewsEdit(dataFilterd)
    }

    return (
        <SectionAdminStyled>
            <Toaster
                position="bottom-left"
            />
            <h2>Artigos</h2>
            <select onChange={handleFilterArticle}>
                <option value="false">Filtre por categoria</option>
                <option value="tecnologia">tecnologia</option>
                <option value="inovação">inovação</option>
                <option value="computação">computação</option>
                <option value="empreendendorismo">empreendendorismo</option>
                <option value="jogos">jogos</option>
            </select>
            {newsEdit.map((news, index) => {
                return (
                    <NewsStyled key={index}>
                        <img src={news.imageURL}></img>
                        <div>
                            <div>
                                <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.title) }} />
                                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.summary) }} />
                                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.author) }} />
                                <Link to={`../category/${news.category}`}>#{news.category}</Link >
                                <p>Destaque: {news.emphasis.toString()}</p>
                            </div>
                            <ButtonsContainer>
                                <ButtonDefault><Link to={`./edit/${news.id}`}>Editar</Link></ButtonDefault>
                                <ButtonDefault onClick={() => { handleDeleteArticle(news.id) }}>Excluir</ButtonDefault>
                            </ButtonsContainer>
                        </div>
                    </NewsStyled>
                )
            })}
        </SectionAdminStyled>
    )
}