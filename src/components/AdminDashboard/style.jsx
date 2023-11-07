import { styled, css } from "styled-components";

export const AsideStyled = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 1.5rem;
  gap: 1.5rem;
  border-right: 1px solid #353438;
  min-width: 15rem;
  max-width: 15rem;

  @media (max-width: 1050px) {
    padding-right: 0rem;
  }

  button:first-child {
    width: 100%;
    border-radius: 5px;
    height: 2.75rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    justify-content: center;
    font-weight: 600;

    @media (max-width: 1050px) {
      width: 102.5%;
      margin-left: 1.5rem;
    }

    a {
      color: #ffff;
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: none;
  }

  ${({ sectionState }) =>
    sectionState.section == "fast"
      ? css`
          button:nth-child(3) {
            p {
              color: ${({ theme }) => theme.colors.purple500};
            }
          }
        `
      : css`
          button:nth-child(2) {
            p {
              color: ${({ theme }) => theme.colors.purple500};
            }
          }
        `}

  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundary};
  }

  @media (max-width: 1050px) {
    display: flex;
    min-width: 100%;
    border: none;
    margin: 0 auto;
    padding-right: 1.7rem;

    button:first-child {
      height: 3rem;
      align-self: center;
    }

    button:last-child {
      border-bottom: 1px solid #353438;
      padding: 0rem 0rem 1rem 0rem;
    }
  }
`;
