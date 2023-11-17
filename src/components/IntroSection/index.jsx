import { Link } from "react-router-dom";
import { SectionContainer, ButtonStyled, MainStyle } from "./style";
import { ButtonDefault } from "../ArticleComposer/style";
import arrowImg from "../../assets/images/arrowdown.svg";

import {
  Graph,
  ShieldCheck,
  PlusCircle,
  ChatsTeardrop,
  FastForwardCircle,
  VirtualReality,
} from "@phosphor-icons/react";
import { Theme } from "../../Styles/Theme";
import { useEffect, useState } from "react";
import Blur from "../../assets/images/blur.svg";

export function IntroSection() {
  return (
    <MainStyle>
      <SectionContainer>
        <div>
          <h1 data-aos="zoom-in">
            O seu guia para o <span>mundo</span> da tecnologia.
          </h1>
          <h3 data-aos="zoom-in">
            Explore as últimas tendências, inovações e insights no fascinante
            universo da tecnologia, mantenha-se sempre atualizado conosco
          </h3>
          <ButtonDefault data-aos="zoom-out">
            <Link to="./home">EXPLORAR</Link>
          </ButtonDefault>
        </div>
        <img src={arrowImg} alt="Seta pra baixo" />
      </SectionContainer>
    </MainStyle>
  );
}
