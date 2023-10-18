import styled from 'styled-components';

export const SectionChoiceStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121214;
  gap: 2rem;
  height: 50rem;

  span {
    position: absolute;
    align-self: end;
    min-width: 15rem;
    min-height: 15rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    border-radius: 50%;
    display: none;
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
      font-size: 1rem;
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
    border-bottom: solid 1px;
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
