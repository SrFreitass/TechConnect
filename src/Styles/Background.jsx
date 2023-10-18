// Estilização do video de fundo da página.

import { styled } from 'styled-components';

export const Background = styled.div`
  background: url(${({ bg }) => bg});
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  height: 101vh;
  width: 100%;
  filter: brightness(50%);
`;
