import { styled } from "styled-components";
import bg from "../../assets/images/background.png";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  justify-content: center;
  background: url(${bg}), linear-gradient(180deg, #121214 0%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  div {
    margin-bottom: 10vh;
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

    font-weight: 600;
    width: 10rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    animation: 3s ease-in-out infinite shadowAnim;
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.purple400});
    transition: all 0.2s;
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
  align-items: center;
  width: 100%;

  img {
    position: absolute;
    align-self: center;
    width: 3rem;
    height: 5rem;
    animation: 1s infinite steps(60) downUp;
  }
`;
