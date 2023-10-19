import styled from "styled-components";

export const SectionChoiceStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121214;
  gap: 2rem;
  height: 50rem;

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
      content: "🚀";
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
    }
  }

  h1 {
    text-align: center;
    margin-top: 5rem;
    width: 60%;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
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
      font-size: 0.9rem;
    }
  }

  p {
    width: 70%;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};
    padding: 0rem 0rem 1rem;
  }

  p {
    width: 80%;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};
    border-bottom: solid 1px #353438;
    padding: 0rem 0rem 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    padding: 0rem 1rem;
    margin-top: 1rem;

    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 1rem;

      @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);

        div:nth-child(3),
        div:nth-child(4) {
          display: none;
        }
      }

      h3 {
        align-self: center;
      }

      div {
        display: flex;
        flex-direction: row;

        &:hover {
          @keyframes rotate360 {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          svg {
          }

          h3 {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }

    h3 {
      width: 80%;
      color: ${({ theme }) => theme.colors.secundary};
      font-weight: 500;
    }

    svg {
      background-color: #191919;
      padding: 1rem;
      border-radius: 10%;
      fill: ${({ theme }) => theme.colors.purple400};
    }
  }
`;
