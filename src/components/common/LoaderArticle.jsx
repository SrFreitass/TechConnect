import { styled } from "styled-components";

export const LoaderArticle = styled.span`
  display: flex;

  @keyframes fade-in {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* section {
    row-gap: 1rem;
    column-gap: 1rem;
  }

  div {
    width: 24.5rem;
    height: 13rem;
    background: #212124;
    animation: 1s infinite fade-in;
  } */
`;
