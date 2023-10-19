import styled from "styled-components";

export const SectionAboutStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(18, 18, 20, 0) 0%, #121214 12.13%);

  @keyframes downUp {
    0% {
      top: 0px;
    }

    50% {
      top: -20px;
    }

    100% {
      top: 0px;
    }
  }

  span {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 10.22%,
      ${({ theme }) => theme.colors.purple700} 52.3%
    );
    width: 0.2rem;
    min-height: 5rem;
    max-width: 5rem;
    border-radius: 5px;
    position: relative;
    top: 5rem;

    &::before {
      display: flex;
      justify-content: center;
      content: "👋";
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
    }
  }

  img {
    position: relative;
    width: 3rem;
    height: 5rem;
    margin: 0 auto;
  }

  div:first-child {
    height: 10rem;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  h1 {
    width: 60%;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
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
  }

  p {
    width: 60%;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};
    padding: 0rem 0rem 1rem;

    @media (max-width: 550px) {
      width: 80%;
      font-size: 1rem;
    }
  }

  div:nth-child(3) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin-top: 5rem;
    gap: 2.5rem;

    height: 100%;

    div {
      &:hover {
        transition: all 0.2s ease-in-out;
        filter: drop-shadow(
          0px 0px 20px ${({ theme }) => theme.colors.purple800}
        );
        h3 {
          transition: all 0.2s ease-in-out;
        }

        p {
          @media (max-width: 550px) {
          }
          transition: all 0.2s ease-in-out;
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      &:nth-child(3) {
        flex-wrap: nowrap;
      }

      margin-top: 3rem;
      display: flex;
      align-items: center;
      border-radius: 5px;
      flex-direction: column;
      width: auto;
      padding: 2rem 3rem;
      height: auto;
      gap: 1rem;
      max-width: 30rem;
      height: 20rem;
      justify-content: center;
      text-align: center;
      align-self: flex-start;

      &:hover {
      }

      p {
        width: 100%;
        display: flex;
        align-items: center;
        border: none;
        gap: 0.5rem;
        color: ${({ theme }) => theme.colors.secundary};
        font-weight: 500;
      }

      @media (max-width: 550px) {
        margin-top: rem;
      }
    }

    h3 {
      img {
        width: 8rem;
        height: 8rem;
        animation: none;
      }

      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
