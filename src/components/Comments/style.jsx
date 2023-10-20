import { styled } from "styled-components";

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: end;

    button {
      position: relative;
      bottom: 3.5rem;
      right: 0.5rem;
    }
  }

  span {
    width: 100%;
  }

  button {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  textarea {
    max-width: 100%;
    resize: none;
  }

  a {
    align-self: start;
  }

  @media (max-width: 1050px) {
    textarea {
      max-height: 15rem;
    }
  }
`;

export const Nocomments = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  height: 10rem;
  border: 1px solid #353438;
  justify-content: center;
  background: linear-gradient(180deg, rgba(33, 33, 36, 0) 0%, #212124 100%);

  span {
    align-self: center;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundary};
  }

  a {
    color: white;
  }
`;
