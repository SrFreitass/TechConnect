import { styled } from "styled-components";

export const Background = styled.video`
    position: absolute;
    z-index: -1;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    filter: brightness(20%);
`