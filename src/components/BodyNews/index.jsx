import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ArticleStyled, Info, MainStyled } from "./style";
import ReactHtmlParser from 'react-html-parser'

export function BodyNews() {
  const [article, setArticle] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("title", "==", content));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        setArticle({ ...doc.data(), id: doc.id });
      } else {
        setArticle(null);
      }
    };

    fetchData();
  }, [title]);

  if (!article) {
    return null;
  }

  return (
    <MainStyled>
      <ArticleStyled>
        {content && ReactHtmlParser(content)}
      </ArticleStyled>
    </MainStyled>
  );
}
