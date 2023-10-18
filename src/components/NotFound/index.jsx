import { Section404 } from './style';
import { ButtonStyled } from '../SectionMain/style';
import { Link } from 'react-router-dom';
import { ButtonDefault } from '../ArticleComposer/style';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function NotFound() {
  const [scale, setScale] = useState(1);
  const ref404 = useRef(null);

  useEffect(() => {
    ref404.current.style.transform = `scale(${scale})`;
  }, [scale]);
  console.log(scale);

  return (
    <>
      <Section404>
        <div>
          {scale <= 0.1 ? '' : ''}
          <motion.h1 ref={ref404} onClick={() => setScale(scale - 0.1)}>
            404
          </motion.h1>
          <p>Bem, acho que tentou entrar numa página que não existe!</p>
        </div>
        <Link to='./home'>Volte para o início.</Link>
      </Section404>
    </>
  );
}
