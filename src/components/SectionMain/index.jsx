import { Link } from "react-router-dom"
import { SectionContainer, ButtonStyled } from "./style"

export function SectionMain() {
  return (
    <>
      <SectionContainer>
        <h1>Inovação, Conexão, Transformação.</h1>
        <div>
          <ButtonStyled><a href="https://github.com/SrFreitass/TechConnect" target="__blank">Ajude nesse projeto!</a></ButtonStyled>
          <ButtonStyled><Link to="/home">Dê uma olhada em nosso artigos</Link></ButtonStyled>
        </div>
      </SectionContainer>
    </>
  )
}
