import { styled } from "styled-components";

export const NewsStyled = styled.article`
  display: flex;
  gap: 1.5rem;
  max-width: auto;

  padding: 1rem 0rem;
  border-bottom: 1px solid #353438;

  a:first-child {
    align-self: center;
  }

  div > a:first-child {
    align-self: flex-start;
  }

  img {
    object-fit: cover;
    border-radius: 5px;
    min-width: 23rem;
    height: 12.5rem;
    width: 23rem;
  }

  div {
    word-break: break-word;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  h3,
  h4,
  p {
    color: ${({ theme }) => theme.colors.secundary};
  }

  h3,
  h4,
  p {
    font-weight: 500;
  }

  @media (max-width: 1050px) {
    h3 {
      display: none;
    }

    img {
      object-fit: cover;
      border-radius: 5px;
      height: 10rem;
      min-width: 20rem;
      width: 18rem;
    }
  }

  @media (max-width: 690px) {
    flex-direction: column;

    a:first-child {
      align-self: flex-start;
      width: 100%;
    }

    button > a:first-child {
      align-self: center;
    }

    h3 {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      min-height: 18rem;
      max-height: 18rem;
      min-width: 0%;
      border-radius: 5px;
      object-fit: cover;
    }

    @media (max-width: 500px) {
      img {
        min-height: 15rem;
        max-height: 15rem;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 1rem;
  gap: 1.5rem;
`;

export const AsidePanel = styled.aside`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 1rem;
  gap: 2rem;

  div:nth-child(3) {
    p {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme.colors.secundary};
    }

    svg {
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      background-color: #121214;
      padding: 0.5rem;
    }
  }

  p {
    padding: 0rem 0.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundary};
  }

  button {
    filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.purple700});

    width: 100%;
    margin-top: 1rem;
    background: none;
    border: ${({ theme }) => theme.colors.purple700} 1px solid;

    &:hover {
      background: ${({ theme }) => theme.colors.purple700};
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    padding: 0.5rem 0.6rem;
  }

  div {
    padding: 0.5rem;
    border: solid 1px ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    ul {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      list-style: none;

      li {
        font-weight: 600;
        background: #121214;
        padding: 0.3rem 1rem;
        border-radius: 0.7rem;

        a {
          color: ${({ theme }) => theme.colors.purple400};
        }
      }
    }
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;
