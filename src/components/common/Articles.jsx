import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { ButtonStyled } from "../SectionMain/style";
import { SectionGrid } from "../../containers/SectionGrid/style";
import { AsidePanel } from "../ArticleFeed/style";
import { ButtonsContainer } from "../ArticleFeed/style";
import { ButtonDefault } from "../ArticleComposer/style";
import DOMPurify from "dompurify";
import { useEffect, useState, useRef } from "react";

export function Articles({
  articlesList,
  showButton,
  handleNextArticles,
  asidePanel,
  management,
}) {
  console.log(showButton);
  const element = useRef();
  const [count, setCount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState({}); //[USD, EUR, BTC

  const dateConverter = (date) => {
    return new Date(date * 1000).toLocaleString("pt-BR");
  };

  const innerContentHTML = (content) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCount((state) => state + 1);
      }
    });

    observer.observe(element.current);

    return () => observer.disconnect();
  }, []);

  const articles = articlesList.map((article, index) => {
    return (
      <NewsStyled key={index}>
        <Link to={`./news/${article.id}`}>
          <img src={article.imageURL} alt="" />
        </Link>
        <div>
          <Link to={`./news/${article.id}`}>
            <h2 dangerouslySetInnerHTML={innerContentHTML(article.title)} />
          </Link>

          <h3 dangerouslySetInnerHTML={innerContentHTML(article.summary)} />
          <h4 dangerouslySetInnerHTML={innerContentHTML(article.author)} />

          <p>{dateConverter(article.date?.seconds)}</p>

          <Link to={`../category/${article.category}`}>
            #{article.category}
          </Link>

          {management?.isPageAdmin && (
            <>
              <p>Destaque: {article.emphasis ? "sim" : "não"}</p>
              <ButtonsContainer>
                <ButtonDefault>
                  <Link to={`./edit/${article.id}`}>Editar</Link>
                </ButtonDefault>
                <ButtonDefault
                  onClick={() => {
                    management.handleDeleteArticle(article.id);
                  }}
                >
                  Excluir
                </ButtonDefault>
              </ButtonsContainer>
            </>
          )}
        </div>
      </NewsStyled>
    );
  });

  useEffect(() => {
    count > 1 && handleNextArticles();
  }, [count]);

  return (
    <section>
      {articles}
      <br ref={element}></br>
    </section>
  );
}
