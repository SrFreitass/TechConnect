import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { ButtonStyled } from "../SectionMain/style";
import { SectionGrid } from '../../containers/SectionGrid/style'
import { AsidePanel } from '../ArticleFeed/style'
import { ButtonsContainer } from "../ArticleFeed/style";
import { ButtonDefault } from "../ArticleComposer/style";
import DOMPurify from "dompurify";
import { useEffect, useState, useRef } from "react";


export function Articles({articlesList, showButton, HandleClickNews, asidePanel, management}) { 

    console.log(showButton)
    const element = useRef()
    const [count, setCount] = useState(0)

    const dateConverter = (date) => {
      return new Date(date * 1000).toLocaleString('pt-BR')
    }

    const innerContentHTML = (content) => {
      return { __html: DOMPurify.sanitize(content) }
    }


    const articles = articlesList.map((article, index) => {
      return (
        <NewsStyled key={index}>

          <Link to={`./news/${article.id}`}><img src={article.imageURL} alt="" /></Link>
          <div>

            <Link to={`./news/${article.id}`}>
              <h2 dangerouslySetInnerHTML={innerContentHTML(article.title)} />
            </Link>

            <h3 dangerouslySetInnerHTML={innerContentHTML(article.summary)} />
            <h4 dangerouslySetInnerHTML={innerContentHTML(article.author)} />

            <p>{dateConverter(article.date?.seconds)}</p>

            <Link to={`../category/${article.category}`}>#{article.category}</Link >

            {management?.isPageAdmin &&
                  <>
                    <p>Destaque: {article.emphasis ? 'sim' : 'não'}</p>
                    <ButtonsContainer>
                      <ButtonDefault><Link to={`./edit/${article.id}`}>Editar</Link></ButtonDefault>
                      <ButtonDefault onClick={() => { management.handleDeleteArticle(article.id) }}>Excluir</ButtonDefault>
                    </ButtonsContainer>
                  </>
            }

          </div>

        </NewsStyled> 
       )
      }
    )


    
    useEffect(() => {
      
      const observer = new IntersectionObserver((entries) => {
        if(entries.some((entry) => entry.isIntersecting)) {
          setCount((state) => state + 1)
        }
      });

      observer.observe(element.current)

      return () => observer.disconnect()

    }, [])

    useEffect(() => {
      count > 1 && HandleClickNews()  
    }, [count])


    return (
        <SectionGrid oneGrid='1fr' twoGrid={asidePanel ? '20rem' : 'none'} >
          <section>

              {articles}
            

            <br />
            {showButton ? <ButtonDefault onClick={HandleClickNews}>Ler mais</ButtonDefault> : ''}
            <div ref={element}></div>
          </section>
          {asidePanel &&
                      <AsidePanel>
                      <div>
                        <h3>Categorias</h3>
                        <ul>
                          <li><Link to="../category/fast">#fast</Link></li>
                          <li><Link to="../category/inovação">#inovação</Link></li>
                          <li><Link to="../category/jogos">#jogos</Link></li>
                          <li><Link to="../category/computação">#computação</Link></li>
                          <li><Link to="../category/tecnologia">#tecnologia</Link></li>
                          <li><Link to="../category/empreendendorismo">#empreendendorismo</Link></li>
                        </ul>
                      </div>
                    </AsidePanel>
          }

        </SectionGrid>
      );
}