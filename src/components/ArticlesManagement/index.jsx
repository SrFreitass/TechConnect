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
import { Search } from "../Header/Search";
import { Articles } from "../common/Articles";

export function SectionAdmin() {
    const [newsEdit, setNewsEdit] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const userCollectionRef = collection(db, "articles");

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(userCollectionRef);
            setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, []);


    useEffect(() => {
        const getDataFilter = async () => {
            if(searchFilter) {
                const q = query(userCollectionRef, where("title", ">=", searchFilter))
                const data = await getDocs(q);
                if(data.docs.length == 0) {
                    toast.error('Nenhum artigo encontrado')
                    const data = await getDocs(userCollectionRef);
                    setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    return
                }
                const dataFilterd = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                toast.success('Artigos encontrados')
                setNewsEdit(dataFilterd)
            }
        }
        getDataFilter()
    }, [searchFilter])

    const handleDeleteArticle = async (id) => {
        const articleDoc = doc(db, "articles", id)
        deleteDoc(articleDoc)
        toast.success('Artigo excluído com sucesso')
        const data = await getDocs(userCollectionRef);
        setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            <h2>Gerenciamento de artigos</h2>
            <br/>
            <div>
                <Search adminFilter={{setSearchFilter, searchFilter}}/>

                <select onChange={handleFilterArticle}>
                    <option value="false">Categoria</option>
                    <option value="tecnologia">tecnologia</option>
                    <option value="inovação">inovação</option>
                    <option value="computação">computação</option>
                    <option value="empreendendorismo">empreendendorismo</option>
                    <option value="jogos">jogos</option>
                </select>
            </div>
            <Articles articlesList={newsEdit} asidePanel={false} management={{isPageAdmin: true, handleFilterArticle, handleDeleteArticle}}/>
        </SectionAdminStyled>
    )
}