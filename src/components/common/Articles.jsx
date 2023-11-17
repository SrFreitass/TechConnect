import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { ButtonStyled } from "../IntroSection/style";
import { AsidePanel } from "../ArticleFeed/style";
import { ButtonsContainer } from "../ArticleFeed/style";
import { ButtonDefault } from "../ArticleComposer/style";
import DOMPurify from "dompurify";
import { useEffect, useState, useRef, Suspense, useCallback } from "react";
import { Loader } from "../Loader";
import { LoaderArticle } from "./LoaderArticle.jsx";
import { GridArticle, SectionFeedStyle } from "./styledCommons";

export function Articles({
  articlesList,
  showButton,
  handleNextArticles,
  asidePanel,
  management,
  isHome,
}) {
  console.log(showButton);
  const element = useRef();
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const { tag } = useParams();

  const handleTagAbout = (tag) => {
    const tagAbout = {
      tecnologia:
        "Explore as últimas tendências em hardware, software e gadgets. Mantenha-se atualizado sobre os avanços tecnológicos que estão moldando o futuro.",
      inovação:
        "Descubra as mais recentes inovações em diversas áreas, desde ideias revolucionárias até tecnologias emergentes e projetos disruptivos.",
      jogos:
        "Imersão total no universo dos jogos, com informações sobre lançamentos, análises, dicas e as últimas tendências no cenário de games.",
      computação:
        "Aprofunde-se em temas técnicos, programação, desenvolvimento de software, inteligência artificial e segurança cibernética.",
      empreendedorismo:
        "Para empreendedores e profissionais ambiciosos, oferecemos estratégias de negócios, histórias inspiradoras e dicas para startups.",
    };

    return tagAbout[tag];
  };

  const dateConverter = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date * 1000).toLocaleString("pt-BR", options);
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
        <Link to={`../home/article/${article.id}`}>
          <img src={article.imageURL} alt="" />
        </Link>
        <div>
          <Link to={`../category/${article.category}`}>
            #{article.category}
          </Link>

          <Link to={`../home/article/${article.id}`}>
            <h2 dangerouslySetInnerHTML={innerContentHTML(article.title)} />
            {/* // <h3 dangerouslySetInnerHTML={innerContentHTML(article.summary)} /> */}
          </Link>

          <h4 dangerouslySetInnerHTML={innerContentHTML(article.author)} />

          <p>{dateConverter(article.date?.seconds)}h</p>

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
    <>
      <SectionFeedStyle isHome={isHome}>
        {articles == "" ? (
          <GridArticle isHome={true}>
            <section>
              <LoaderArticle>
                <div></div>
              </LoaderArticle>
            </section>
          </GridArticle>
        ) : (
          <>
            <div></div>

            <GridArticle isHome={isHome}>
              {isHome ? (
                ""
              ) : (
                <div>
                  <h2 style={{ color: "#8A8AE0" }}>{`#${tag}`}</h2>
                  <p>{tag ? handleTagAbout(tag) : "..."}</p>
                </div>
              )}
              <section>{articles}</section>
            </GridArticle>
          </>
        )}
        <br ref={element} />

        {showButton ? (
          <ButtonDefault onClick={handleNextArticles}>Ler mais</ButtonDefault>
        ) : (
          ""
        )}
      </SectionFeedStyle>
    </>
  );
}
