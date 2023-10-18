import { styled } from 'styled-components';

export const VerificationContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    width: 90%;
    max-width: 30rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secundary};
  }

  span {
    color: ${({ theme }) => theme.colors.purple400};
    text-decoration: underline;

    cursor: pointer;
  }

  bold > a {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    text-align: start;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.purple500};
  }
`;
