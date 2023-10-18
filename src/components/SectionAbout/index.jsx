import { motion } from 'framer-motion';
import { SectionAboutStyle } from './style';
import target3D from '../../assets/images/target.png';
import team3D from '../../assets/images/team.png';
import hand3D from '../../assets/images/hand.png';
import { useEffect, useRef } from 'react';

export function SectionAbout() {
  return (
    <>
      <SectionAboutStyle>
        <div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}></div>
        <div>
          <h1
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -20 }}
          >
            Somos um portal de notícias completo, focado em tecnologia.
          </h1>
          <p
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, y: -20 }}
          >
            Bem-vindo ao TechConnect! Somos apaixonados por tecnologia e estamos
            empenhados em compartilhar informações atualizadas e relevantes
            sobre o mundo da inovação tecnológica.
          </p>
        </div>
        <div>
          <div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -20 }}
            whileHover={{ scale: 1.1 }}
          >
            <h3>
              <img src={target3D} />
              Objetivo
            </h3>
            <p>
              O objetivo do TechConnect é ser um destino confiável para explorar
              o mundo em constante evolução da tecnologia. Com uma linguagem de
              fácil entendimento.
            </p>
          </div>
          <div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -20 }}
            whileHover={{ scale: 1.1 }}
          >
            <h3>
              <img src={team3D} />
              Nossa Equipe
            </h3>
            <p>
              A equipe do TechConnect é composta por entusiastas apaixonados
              pela tecnologia, dedicados a compartilhar conhecimentos e fornecer
              conteúdo de qualidade.
            </p>
          </div>
          <div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -20 }}
            whileHover={{ scale: 1.1 }}
          >
            <h3>
              <img src={hand3D} /> Futuro e Visão
            </h3>
            <p>
              O TechConnect planeja expandir sua presença online e alcance para
              atingir um público diversificado. Queremos ser uma fonte de
              inspiração e conhecimento.
            </p>
          </div>
        </div>
        <span
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 20 }}
        ></span>
        <br />
      </SectionAboutStyle>
    </>
  );
}
