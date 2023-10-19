import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { ArticleCreationForm } from "../components/ArticleComposer";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../components/Loader";
import { Navigate } from "react-router-dom";
import { useAdminVerify } from "../hooks/useAdminVerify";
import { auth } from "../services/firebaseconfig";

export function ArticleCreate() {
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
