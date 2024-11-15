import DOMPurify from "dompurify";
import {
  collection,
  getDocs,
  limit,
  query,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { db } from "../../services/firebase";
import { RecomentDiv } from "./style";

export function Recomend({ category, title }) {
  const [articleRecommends, setArticleRecommends] = useState([]);
  

  useEffect(() => {
    const fetchRecommends = async () => {
      const q = query(
        collection(db, "articles"),
        where("title", "!=", title),
        where("category", "==", category),
        limit(4)
      );
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticleRecommends(data);
    };
    fetchRecommends();
  }, [title]);

  return (
    <RecomentDiv>
      <span>Relacionados</span>
      {articleRecommends.map((article, index) => {
        return (
          <>
            <NewsStyled key={index}>
              <Link to={`../home/article/${article.id}`}>
                <img src={article.imageURL} alt="" />
              </Link>
              <div>
                <Link to={`../home/article/${article.id}`}>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(article.title),
                    }}
                  />
                </Link>
                <Link to={`../category/${article.category}`}>
                  #{article.category}
                </Link>
              </div>
            </NewsStyled>
            <span> </span>
          </>
        );
      })}
    </RecomentDiv>
  );
}

const NewsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 0.6rem;
    min-width: 11.25rem;
    max-width: 11.25rem;
    max-height: 6.875rem;
    min-height: 6.875rem;
  }

  h3 {
    width: 100%;
    display: flex;
    /* word-break: break-word; */
    font-size: 1rem;
  }
`;
