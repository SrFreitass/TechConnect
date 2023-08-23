import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { ArticleCreationForm } from '../components/ArticleComposer'
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../components/Loader";
import { Navigate } from "react-router-dom";
import { useAdminVerify } from "../hooks/useAdminVerify";

export function ArticleCreate() {

    const token = useAdminVerify()

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