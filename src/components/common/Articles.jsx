import { NewsStyled } from "../ArticleFeed/style";
import { Link, useParams } from "react-router-dom";
import { ButtonStyled } from "../SectionMain/style";
import { SectionGrid } from '../../containers/SectionGrid/style'
import { AsidePanel } from '../ArticleFeed/style'
import { ButtonsContainer } from "../ArticleFeed/style";
import { ButtonDefault } from "../ArticleComposer/style";
import DOMPurify from "dompurify";


export function Articles({articlesList, ShowButton, HandleClickNews, asidePanel, management}) {   
    return (
        <SectionGrid oneGrid='1fr' twoGrid={asidePanel ? '20rem' : 'none'} >
          <section>
            {articlesList.map((article, index) => {
              return (
                <NewsStyled key={index}>
                  <Link to={`./news/${article.id}`}><img src={article.imageURL} alt="" /></Link>
                  <div>
                    <Link to={`./news/${article.id}`}>
                      <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }} />
                    </Link>
                    <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.summary) }} />
                    <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(`${article.author}`) }} />
                    <p>{new Date(article.date?.seconds * 1000).toLocaleString('pt-BR')}</p>
                    
                    {management?.isPageAdmin ?
                        <>
                            <p>Destaque {(article.emphasis).toString()}</p>
                            <Link to={`../category/${article.category}`}>#{article.category}</Link >
                            <ButtonsContainer>
                                <ButtonDefault><Link to={`./edit/${article.id}`}>Editar</Link></ButtonDefault>
                                <ButtonDefault onClick={() => { management.handleDeleteArticle(article.id) }}>Excluir</ButtonDefault>
                            </ButtonsContainer>
                        </>
                    : ''
                    }
                  </div>
                </NewsStyled>
              );
            })}
            {ShowButton ? <ButtonStyled onClick={HandleClickNews}>Ler mais</ButtonStyled> : ''}
          </section>
          {asidePanel ?
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
            : ''
          }

        </SectionGrid>
      );
}