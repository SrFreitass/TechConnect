import { Link } from 'react-router-dom';
import { SectionContainer, ButtonStyled, MainStyle } from './style';
import { ButtonDefault } from '../ArticleComposer/style';
import arrowImg from '../../assets/images/arrowdown.svg';

import { motion, useScroll } from 'framer-motion';
import {
  Graph,
  ShieldCheck,
  PlusCircle,
  ChatsTeardrop,
  FastForwardCircle,
  VirtualReality,
} from '@phosphor-icons/react';
import { Theme } from '../../Styles/Theme';
import { useEffect, useState } from 'react';

export function SectionMain() {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow(true);
    window.removeEventListener('scroll', handleArrow);
  };

  window.addEventListener('scroll', handleArrow);

  return (
    <MainStyle>
      <SectionContainer>
        <div>
          <h1>
            O seu guia para o <span>mundo</span> da tecnologia.
          </h1>
          <h3>
            Explore as últimas tendências, inovações e insights no fascinante
            universo da tecnologie, mantenha-se sempre atualizado conosco
          </h3>
          <ButtonDefault>EXPLORAR</ButtonDefault>
        </div>
      </SectionContainer>
      <span> </span>
      {arrow ? '' : <img src={arrowImg} />}
    </MainStyle>
  );
}

//  O TechConnect é um projeto
//             liderado por Guilherme Freitas do Nascimento, um entusiasta da
//             tecnologia, e é orientado por Thiago. Nosso objetivo é proporcionar
//             aos nossos visitantes uma visão envolvente do universo da tecnologia
//             por meio de conteúdo cuidadosamente elaborado e atualizações
//             frequentes. Este é o lugar onde você pode explorar as últimas
//             tendências, novidades e insights no mundo da tecnologia. Agradecemos
//             a todos os nossos contribuidores que desempenham um papel
//             fundamental no sucesso contínuo do TechConnect. Estamos
//             comprometidos em fornecer um espaço informativo e inspirador para
//             entusiastas e profissionais de tecnologia. Sinta-se à vontade para
//             explorar nosso site e mergulhar no emocionante mundo da tecnologia!
