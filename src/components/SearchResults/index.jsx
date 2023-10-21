import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebaseconfig";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  where,
  query,
  startAfter,
  limit,
} from "firebase/firestore";
import { ArticleStyled } from "../ArticleBody/style";
import { ButtonStyled } from "../IntroSection/style";
import DOMPurify from "dompurify";
import { Loader } from "../Loader";
import { Articles } from "../common/Articles";
import { SearchResultsStyled } from "./style";
import he from "he";

export function SearchContainer() {
  const [newsResults, setNewsResults] = useState([]);
  const [visibleItems, setVisibleItems] = useState();
  const [searchHasResults, setSearchHasResults] = useState();
  let { searchTitle } = useParams();
  searchTitle = he.decode(searchTitle);
  const userCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getData = async () => {
      const q = query(
        userCollectionRef,
        where("title", ">=", searchTitle),
        limit(5)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length === 0) {
        const queryEmphasis = query(
          userCollectionRef,
          where("emphasis", "==", true)
        );

        const querySnapshot1 = await getDocs(queryEmphasis);

        const data = querySnapshot1.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNewsResults(data);
        setSearchHasResults(false);
        return;
      }

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewsResults(data);
      setVisibleItems(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setSearchHasResults(true);
    };
    getData();
  }, [searchTitle]);

  const handleNextArticles = async () => {
    try {
      const q = query(
        userCollectionRef,
        where("title", ">=", searchTitle),
        startAfter(visibleItems),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNewsResults([...data, ...newsResults]);
      setVisibleItems(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(handleNextArticles);

  return (
    <SearchResultsStyled>
      {searchHasResults ? (
        <p>vai se fuder</p>
      ) : (
        <>
          <strong>Não há resultado para: "{searchTitle}"</strong>
          <p>
            Você pode utilizar o menu acima e acessar notícias, buscar por
            palavras-chave. Além disso, olha essas sugestões aqui que separamos
            para você:
          </p>
        </>
      )}
      <Articles
        articlesList={newsResults}
        showButton={false}
        handleNextArticles={handleNextArticles}
        asidePanel={false}
      />
    </SearchResultsStyled>
  );
}
