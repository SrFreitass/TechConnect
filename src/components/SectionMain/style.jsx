import { styled } from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  section {
    margin-top: 20rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;

    span {
      color: ${({ theme }) => theme.colors.purple700};
    }
  }

  h3 {
    font-weight: 500;
    text-align: center;
    max-width: 45rem;
    color: ${({ theme }) => theme.colors.secundary};
  }

  button {
    @keyframes shadowAnim {
      0% {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.purple700});
      }

      50% {
        filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.purple700});
      }
      100% {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.purple700});
      }
    }

    font-weight: bold;
    width: 10rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    animation: 3s ease-in-out infinite shadowAnim;
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.purple700});
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple700};
      transition: all 0.2s;
    }
    z-index: 1;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      width: 80%;
      font-size: 1rem;
    }
  }

  @media (max-width: 730px) {
    h3 {
      width: 80%;
    }
  }

  @media (max-width: 550px) {
    h1 {
      width: 80%;
      font-size: 1.8rem;
    }

    h3 {
      width: 80%;
      font-size: 1rem;
    }
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.1s;
    filter: drop-shadow(0px 0px 20px ${({ theme }) => theme.colors.purple700});
  }

  height: 2.5rem;
  font-size: 1.2rem;
  padding: 1rem;

  border: none;
  border-radius: 5px;

  background: none;
  background-color: ${({ theme }) => theme.colors.purple700};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    position: relative;
    width: 3rem;
    height: 5rem;
    margin: 0 auto;
    animation: 1s infinite steps(60) downUp;
  }

  span:nth-child(2) {
    position: absolute;
    bottom: -15rem;
    display: flex;
    display: none;
    align-self: center;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.purple700};
    animation: 5s infinite steps(60) Animation;
    @media (max-width: 480px) {
      animation: none;
    }
  }

  @keyframes Animation {
    0% {
      width: 20rem;
    }

    50% {
      width: 30rem;
    }

    75% {
      width: 25rem;
    }

    100% {
      width: 20rem;
    }
  }
`;
