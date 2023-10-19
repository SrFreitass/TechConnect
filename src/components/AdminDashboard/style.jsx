import { styled, css } from "styled-components";

export const AsideStyled = styled.aside`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  gap: 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.secundary};
  min-width: 15rem;
  max-width: 15rem;

  button:first-child {
    width: 100%;
    border-radius: 8px;
    height: 2.75rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    justify-content: center;
    font-weight: 600;

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
    display: none;
  }
`;
