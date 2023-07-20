import { NewsStyled } from "./style";
import { Aside } from '../Aside';
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { ArticleStyled } from "../BodyNews/style";
import { ButtonStyled } from "../SectionMain/style";

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
      {/* Map na variável news, com o método .slice() que coloca uma limite de objetos a serem renderizados.*/}

      {news.slice(0, visibleItems).map((article, index) => {


        return (
          <NewsStyled key={index}>
            <img src={article.image} alt="" />
            <div>
              <Link to={`./news/${article.title}`}>
                <h2>{article.title}</h2> 
              </Link>
              <p>{article.summary}</p>
            </div>
          </NewsStyled>
        );
      })}
      <ButtonStyled onClick={HandleClickNews}>Ler mais</ButtonStyled>
    </div>
  );
}