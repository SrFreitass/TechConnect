import { styled } from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 10rem;

  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  div:nth-child(4) {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

   {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};

    span {
      color: ${({ theme }) => theme.colors.purple400};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 19rem;
  }

  @media (max-width: 925px) {
    gap: 4rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      margin-left: 0;
    }

    form {
      width: 100%;
      max-width: 30rem;
      display: flex;
      justify-content: center;
      padding: 0rem 0rem 2rem 0rem;
      border-bottom: 2px solid ${({ theme }) => theme.colors.gray600};

      div:nth-child(3) > input {
        max-width: 100%;
      }
    }
  }
`;
