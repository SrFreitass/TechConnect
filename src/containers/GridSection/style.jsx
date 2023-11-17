import { styled } from "styled-components";

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: ${({ oneGrid }) => oneGrid} ${({ twoGrid }) => twoGrid};
  gap: ${({ gap }) => (gap ? "4rem" : "none")};

  margin-top: 0.8rem;

  @media (max-width: 1050px) {
    grid-template-columns: none;
  }
`;
