import { NewsStyled, NewsContainer } from "./style";
import { Aside } from '../Aside';
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { ArticleStyled } from "../BodyNews/style";
import { ButtonStyled } from "../SectionMain/style";

export const extractTagContent = (html, tagName) => {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = html;
  const tagElement = tempElement.querySelector(tagName);
  return tagElement ? tagElement.textContent : '';
}

export function News() {
  const [news, setNews] = useState([]);
  const userCollectionRef = collection(db, "articles");
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);


  const HandleClickNews = () => {
    setVisibleItems(visibleItems + 5);
  };

  return (
    <div>
      {news.slice(0, visibleItems).map((article, index) => {

        const title = extractTagContent(article.content, 'h1');
        const summary = extractTagContent(article.content, 'h2');
        const author = extractTagContent(article.content, 'p');
        
        return (
          <NewsStyled key={index}>
            <img src={article.image} alt="" />
            <div>
              <Link to={`./news/${title}}`}>
                <h2>{title}</h2> 
              </Link>
              <p>{summary}</p>
              <p>{author}</p>
            </div>
          </NewsStyled>
        );
      })}
      <ButtonStyled onClick={HandleClickNews}>Ler mais</ButtonStyled>
    </div>
  );
}