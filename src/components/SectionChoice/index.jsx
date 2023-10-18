import { motion } from 'framer-motion';
import { SectionChoiceStyle } from './style';
import {
  Graph,
  ShieldCheck,
  PlusCircle,
  ChatsTeardrop,
  FastForwardCircle,
  VirtualReality,
  Code,
  Infinity,
  LineSegments,
} from '@phosphor-icons/react';
import { Wrapper } from '../../Styles/Wrapper';
import { useEffect, useRef } from 'react';

export function SectionChoice() {
  return (
    <>
      <SectionChoiceStyle>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='bottom'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -10 }}
        >
          Por que escolher a plataforma da &#60;techconnect/&#62;?
        </h1>
        <div>
          <div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <ChatsTeardrop size={64} color='white' />
              <h3>Seção de Comentários para interação nos artigos.</h3>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <VirtualReality size={64} color='white' />
              <h3>Uma sala de Metaverso exclusiva do TechConnect.</h3>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <FastForwardCircle size={64} color='white' />
              <h3>Seção de vídeos curto de Curiosidades e Notícias Rápidas.</h3>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <Code size={64} color='white' />
              <h3>Feita com as mais rápidas tecnologias no mercado.</h3>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <LineSegments size={64} color='white' />
              <h3>Artigos cuidadosamente articulados.</h3>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom'>
              <Infinity size={64} color='white' />
              <h3>Ultimas têndencias do mundo tech em um só lugar.</h3>
            </div>
          </div>
        </div>
        <span></span>
      </SectionChoiceStyle>
    </>
  );
}
