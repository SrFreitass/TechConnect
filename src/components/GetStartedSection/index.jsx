import { ButtonDefault } from "../ArticleComposer/style";
import { SectionGoHomeStyle } from "./style";
import astronaut from "../../assets/images/astronaut3d.png";
import { Wrapper } from "../../Styles/Wrapper";
import { Link } from "react-router-dom";

export function SectionGoHome() {
  return (
    <SectionGoHomeStyle>
      <div data-aos="fade-up">
        <h1>
          Tá esperando o que para explorar esse <span>mundo</span>?
        </h1>
        <h3>
          Inicie sua jornada para se tornar um conhecedor de tecnologia mais bem
          informado através do TechConnect.
        </h3>
        <ButtonDefault>
          <Link to="../home">EXPLORAR</Link>
        </ButtonDefault>
      </div>
      <img
        data-aos="fade-up"
        src={astronaut}
        alt="Astrounauta em cima do foguete"
      />
    </SectionGoHomeStyle>
  );
}
