import styled from "styled-components";

export const SectionGoHomeStyle = styled.section`
  display: flex;
  align-items: center;
  background-color: #121214;
  height: 50rem;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    div {
      align-items: center !important;
    }

    button {
      align-self: center !important;
    }

    h1 {
      text-align: center;
    }

    h3 {
      text-align: center;
    }
  }

  div {
    align-items: start;
    max-width: 1600px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      align-self: start;
      border: 1px solid ${({ theme }) => theme.colors.purple700};
      background: none;
      width: 12rem;
      height: 3.5rem;

      &:hover {
        background: ${({ theme }) => theme.colors.purple700};
      }
    }

    @media (max-width: 1000px) {
      h1 {
        font-size: 2rem;
      }

      h3 {
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
        font-size: 0.9rem;
      }

      img {
        width: 18rem;
      }
    }
  }

  @media (max-width: 450px) {
    img {
      width: 15rem;
    }
  }

  @media (max-width: 300px) {
    img {
      display: none;
    }
  }

  h1 {
    width: 70%;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};

    span {
      color: ${({ theme }) => theme.colors.purple700};
    }
  }

  h3 {
    width: 80%;
    max-width: 35rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 500;
  }
`;
