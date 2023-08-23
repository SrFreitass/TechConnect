import { NewsStyled } from "./style";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection, where, query } from "firebase/firestore";
import { ArticleStyled } from "../ArticleBody/style";
import { ButtonStyled } from "../SectionMain/style";
import { SectionGrid } from '../../containers/SectionGrid/style'
import { AsidePanel } from './style'
import DOMPurify from "dompurify";

export function News() {
  const [news, setNews] = useState([]);
  const userCollectionRef = collection(db, "articles");
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "articles"), where("emphasis", "==", false));
      const querySnapshot = await getDocs(q);

      // Transforma o resultado em um array de objetos
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNews(data);
      console.log(data)
    };
    getData();
  }, []);


  const HandleClickNews = () => {
    setVisibleItems(visibleItems + 5);
  };

  return (
    <SectionGrid>
      <div>
        {news.slice(0, visibleItems).map((article, index) => {
          return (
            <NewsStyled key={index}>
              <img src={article.imageURL} alt="" />
              <div>
                <Link to={`./news/${article.id}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }} />
                </Link>
                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.summary) }} />
                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.author) }} />
                <Link to={`../category/${article.category}`}>#{article.category}</Link >
              </div>
            </NewsStyled>
          );
        })}
      </div>
      <AsidePanel>
        <strong>Olá!</strong>
      </AsidePanel>
    </SectionGrid>
  );
}