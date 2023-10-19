import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { ArticleEditForm } from "../components/ArticleEditor";
import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useAdminVerify } from "../hooks/useAdminVerify";
import { auth } from "../services/firebaseconfig";

export function ArticleEdit() {
  const token = useAdminVerify();

  if (token === "admin") {
    return (
      <Wrapper>
        <Header />
        <ArticleEditForm />
      </Wrapper>
    );
  }

  if (token === "error") {
    return <Navigate to="/not-found-404" />;
  }

  return (
    <Wrapper>
      <Header />
      <Loader />
    </Wrapper>
  );
}
