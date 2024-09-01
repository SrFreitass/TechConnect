import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Articles } from "../components/common/Articles";
import { Header } from "../components/Header";
import { db } from "../services/firebase";
import { Wrapper } from "../Styles/Wrapper";

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
