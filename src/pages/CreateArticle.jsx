import { Navigate } from "react-router-dom";
import { Wrapper } from "../Styles/Wrapper";
import { ArticleCreationForm } from "../components/ArticleComposer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { useAdminVerify } from "../hooks/useAdminVerify";

export function CreateArticle() {
  const token = useAdminVerify();

  if (token == "admin") {
    return (
      <Wrapper>
        <Header />
        <ArticleCreationForm />
      </Wrapper>
    );
  }

  if (token == "error") {
    return <Navigate to="/not-found-404" />;
  }

  return (
    <Wrapper>
      <Header />
      <Loader />
    </Wrapper>
  );
}
