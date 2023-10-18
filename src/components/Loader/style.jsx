import { styled } from 'styled-components';

export const StyledLoader = styled.h1`
  height: 95vh;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  animation: float ease-in-out 2s infinite;

  @keyframes float {
    0% {
      top: 0rem;
    }

    50% {
      top: 1rem;
    }

    100% {
      top: 0rem;
    }
  }
`;
