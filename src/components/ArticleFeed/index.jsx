import { NewsStyled } from "./style";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebaseconfig";
import { useEffect, useState, useRef } from "react";
import { getDocs, collection, where, query, orderBy, limit, startAfter, startAt } from "firebase/firestore";
import { ArticleStyled } from "../ArticleBody/style";
import { ButtonStyled } from "../SectionMain/style";
import { SectionGrid } from '../../containers/SectionGrid/style'
import { AsidePanel } from './style'
import DOMPurify from "dompurify";
import { styled } from "styled-components";

export function News() {
  const [news, setNews] = useState([]);
  const userCollectionRef = collection(db, "articles")
  const [lastVisible, setLastVisible] = useState(0)
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const q = query(userCollectionRef, where("emphasis", "==", false), orderBy('date', 'desc'), limit(5))
      const querySnapshot = await getDocs(q)
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1])

      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setNews(data)
      console.log(data)
    };
    getData()
  }, []);




  const HandleClickNews = async () => {
    try {
      const next = await query(userCollectionRef, where("emphasis", "==", false), orderBy('date', 'desc'), startAfter(lastVisible), limit(5))
      const querySnapshot = await getDocs(next)
      const nextData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      if (querySnapshot.docs.length == 0) {
        setShowButton(false)
        return
      }
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1])
      setNews((state) => [...state, ...nextData])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <SectionGrid oneGrid='1fr' twoGrid='20rem'>
      <div>
        {news.map((article, index) => {
          return (
            <NewsStyled key={index}>
              <Link to={`./news/${article.id}`}><img src={article.imageURL} alt="" /></Link>
              <div>
                <Link to={`./news/${article.id}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }} />
                </Link>
                <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.summary) }} />
                <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(`${article.author} ${new Date(article.date.seconds * 1000).toLocaleString('pt-BR')}`) }} />
                <Link to={`../category/${article.category}`}>#{article.category}</Link >
              </div>
            </NewsStyled>
          );
        })}
        {showButton ? <ButtonStyled onClick={HandleClickNews}>Ler mais</ButtonStyled> : ''}
      </div>
      <AsidePanel>
        <div>
          <h3>Categorias</h3>
          <ul>
            <li><Link to="../category/fast">#fast</Link></li>
            <li><Link to="../category/inovacao">#inovação</Link></li>
            <li><Link to="../category/tecnologia">#tecnologia</Link></li>
            <li><Link to="../category/empreendendorismo">#empreendendorismo</Link></li>
            <li><Link to="../category/computacao">#computação</Link></li>
          </ul>
        </div>
      </AsidePanel>
    </SectionGrid>
  );
}

