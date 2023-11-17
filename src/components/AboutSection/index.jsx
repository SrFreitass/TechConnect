import { SectionAboutStyle } from "./style";
import target3D from "../../assets/images/target.png";
import team3D from "../../assets/images/team.png";
import hand3D from "../../assets/images/hand.png";
import { useEffect, useRef } from "react";

export function AboutSection() {
  return (
    <>
      <SectionAboutStyle>
        <div></div>
        <div>
          <h1 data-aos="fade-up" data-aos-anchor-placement="bottom">
            Somos um portal de notícias completo, focado em tecnologia.
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom">
            Bem-vindo ao TechConnect! Somos apaixonados por tecnologia e estamos
            empenhados em compartilhar informações atualizadas e relevantes
            sobre o mundo da inovação tecnológica.
          </p>
        </div>
        <div>
          <div data-aos="zoom-in-up">
            <h3>
              <img src={target3D} alt="Flecha no alvo 3D" />
              Objetivo
            </h3>
            <p>
              O objetivo do TechConnect é ser um destino confiável para explorar
              o mundo em constante evolução da tecnologia. Com uma linguagem de
              fácil entendimento.
            </p>
          </div>
          <div data-aos="zoom-in-up">
            <h3>
              <img src={team3D} alt="Aperto de mão 3D" />
              Nossa Equipe
            </h3>
            <p>
              A equipe do TechConnect é composta por entusiastas apaixonados
              pela tecnologia, dedicados a compartilhar conhecimentos e fornecer
              conteúdo de qualidade.
            </p>
          </div>
          <div data-aos="zoom-in-up">
            <h3>
              <img src={hand3D} alt="Mão segurando uma lâmpada 3D" /> Futuro e
              Visão
            </h3>
            <p>
              O TechConnect planeja expandir sua presença online e alcance para
              atingir um público diversificado. Queremos ser uma fonte de
              inspiração e conhecimento.
            </p>
          </div>
        </div>
        <span data-aos="fade-down"></span>
        <br />
      </SectionAboutStyle>
    </>
  );
}
