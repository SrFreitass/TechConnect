import { styled } from "styled-components";

export const RecomentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 500;
    max-height: 6.875rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundary};
    font-size: 1.2rem;
  }

  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
    margin-left: 0rem;
  }

  @media (max-width: 450px) {
    margin-left: 0rem;
    width: 100%;

    span:first-child {
      border: none;
    }

    span {
      border-bottom: 1px solid #353438;
    }

    div {
      img {
        border-radius: 5px;
        min-height: 12rem;
        object-fit: cover;
        min-width: 100%;
      }

      div {
        align-self: flex-start;
      }

      flex-direction: column;
    }
  }
`;
