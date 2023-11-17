import { styled } from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArticleStyled = styled.div`
  display: flex;
  gap: 0.6rem;
  min-width: 40rem;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 1050px) (min-width: 651px) {
  }

  @media (max-width: 650px) {
  }

  /* flex-direction: column; */
  /* color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    width: 70%;

    img {
        height: 25rem;
        object-fit: cover;
    } */
`;

export const Info = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundary};
  }

  p {
    color: ${({ theme }) => theme.colors.gray200};
  }

  time {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const ArticleContainerStyled = styled.main`
  display: flex;
  gap: 1rem;

  strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  textarea {
    width: 100%;

    padding: 0.5rem;

    border: none;
    border-radius: 5px;

    background-color: #212124;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }

  textarea:focus {
    transition: ease-in-out 0.1s;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.purple700};
  }

  img {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
    border-radius: 5px;
  }

  h2,
  h3,
  h4,
  h5 {
    color: #eeeeee;
    font-family: "Bitter";
  }

  h1 {
    font-family: "Montserrat";
    color: #e0e0e0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 2rem;
  }

  h2 {
    font-family: "Montserrat";
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 500;
    font-size: 1.2rem;
  }

  strong {
    font-family: "Bitter";
  }

  p:nth-child(3) {
    font-family: "Montserrat" !important;
  }

  p {
    text-align: start !important;
    width: 100%;
    font-family: "Bitter";
    font-size: 17px;
    color: #dedede;
    font-weight: 400;
    line-height: 1.8rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
    gap: 0.8rem;
  }

  li {
    color: ${({ theme }) => theme.colors.primary};
  }

  h6 {
    color: ${({ theme }) => theme.colors.purple400};
    font-weight: 500;
    font-size: 1.2rem;
  }

  div {
    aside {
      display: none;
    }
  }

  @media (max-width: 1150px) {
    aside:first-child {
      display: none;
    }

    div > aside {
      display: flex;
      flex-direction: row;
      justify-content: start;
    }
  }

  @media (max-width: 650px) {
    img {
      height: 100%;
      max-height: 25rem;
      object-fit: contain;
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row !important;
  min-width: 75%;
  padding: 1rem;

  border: solid 1px #353438;
  border-radius: 5px;

  h3 {
    font-family: "Montserrat";
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  h4 {
    font-family: "Montserrat";
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    word-break: break-word;
    font-family: "Montserrat";
    color: ${({ theme }) => theme.colors.secundary};
  }

  button {
    display: flex;
    background: none;
    border: none;
  }

  svg {
    min-width: 1.2rem;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.purple700};
  }

  svg:hover {
    filter: drop-shadow(0 0 0.75rem crimson);
    transition: linear 0.2s;
    fill: red;
    cursor: pointer;
  }
`;
