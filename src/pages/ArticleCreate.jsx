import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { ArticleCreationForm } from '../components/ArticleCreationForm'
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../components/Loader";
import { db } from "../firebaseconfig";
import { Navigate } from "react-router-dom";

export function ArticleCreate() {

    const [token, setToken] = useState('')

    useEffect(() => {
        console.log('renderizou')
        const q = query(collection(db, "admin"), where("uid", "==", localStorage.getItem("token")));
        const teste = (getDocs(q)).then((querySnapshot) => {
            return querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0].uid
        })
        teste.then((res) => {
            setToken(res)
        })
            .catch((error) => {
                setToken('error')
                console.log('errou')
            })
    }, [])

    if (localStorage.getItem("token") === token) {
        return (
            <Wrapper>
                <Header />
                <ArticleCreationForm />
            </Wrapper>
        )
    } else if (token === 'error') {
        return (
            <Navigate to="/not-found-404" />
        )
    } else {
        return (
            <Wrapper>
                <Header />
                <Loader />
            </Wrapper>
        )
    }
}