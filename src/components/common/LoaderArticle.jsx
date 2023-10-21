import { styled } from "styled-components";

export const LoaderArticle = styled.span`
  margin-top: 10rem;

  @keyframes fade-in {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  div {
    width: 100%;
    position: relative;
    color: #fff; /* Cor do texto */
    display: flex;
    gap: 1rem;

    span {
      background: #212124;
      object-fit: cover;
      border-radius: 5px;
      min-width: 23rem;
      height: 12.5rem;
      width: 23rem;
    }
  }

  div h2 {
    width: 100%;
    background-color: #333;
    border-radius: 0px 5px 5px 0px; /* Cor de fundo diferente para o título */
  }

  div > div {
    /* Cor de fundo diferente para o conteúdo */
    animation: fade-in infinite 0.5s;
  }

  @media (max-width: 800px) {
    div {
      background: #333;
    }

    span:nth-child(2) {
      display: none;
    }

    div h2 {
      display: none;
    }
  }

  @media (max-width: 690px) {
    div {
      background: #212124;
    }
  }
`;
