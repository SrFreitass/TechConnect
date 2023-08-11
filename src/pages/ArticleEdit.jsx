import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { ArticleEditForm } from '../components/ArticleEditForm'
import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useAdminVerify } from "../hooks/useAdminVerify";


export function ArticleEdit() {

    const token = useAdminVerify()

    if (localStorage.getItem("token") === token) {
        return (
            <Wrapper>
                <Header />
                <ArticleEditForm />
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