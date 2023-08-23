import { Section404 } from "./style"
import { ButtonStyled } from "../SectionMain/style"
import image404 from '../../assets/images/image-404.svg'
import { Link } from "react-router-dom"
import { ButtonDefault } from "../ArticleComposer/style"

export function NotFound() {
  return (
    <>
      <Section404>
        <div>
          <h1>404</h1>
          <p>Bem, acho que tentou entrar numa página que não existe!</p>
        </div>
        <ButtonStyled><Link to="..">Volte para casa...</Link></ButtonStyled>
      </Section404>
    </>
  )
}
