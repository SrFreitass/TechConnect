// Estilização do video de fundo da página.

import { styled } from "styled-components";
import bg from '../assets/images/background.png'

export const Background = styled.div`
    background: url(${bg});
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    filter: brightness(40%);
`