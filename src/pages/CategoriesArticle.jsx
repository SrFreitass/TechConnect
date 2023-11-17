import {
  query,
  collection,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseconfig";
import { useState } from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../Styles/Wrapper";
import DOMPurify from "dompurify";
import { Articles } from "../components/common/Articles";

export function CategoriesArticle() {
  const { tag } = useParams();
  const [articles, setArticles] = useState([]);
  const [lastVisible, setLastVisible] = useState({});

  useEffect(() => {
    const fetchArticleData = async () => {
      const q = query(
        collection(db, "articles"),
        where("category", "==", tag),
        orderBy("date", "desc"),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      setArticles(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };
    fetchArticleData();
  }, [tag]);

  const handleNextArticles = async () => {
    const q = query(
      collection(db, "articles"),
      where("category", "==", tag),
      orderBy("date", "desc"),
      startAfter(lastVisible),
      limit(5)
    );

    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);

    if (querySnapshot.docs.length < 1) {
      console.log("tem nada não meu fi");
      return;
    }

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setArticles([...articles, ...data]);
  };

  console.log(articles);

  return (
    <Wrapper>
      <Header />

      <Articles
        articlesList={articles}
        handleNextArticles={handleNextArticles}
        isHome={false}
      />
    </Wrapper>
  );
}
