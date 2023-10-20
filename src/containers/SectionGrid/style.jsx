import { styled } from "styled-components";

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;

  display: grid;
  grid-template-columns: ${({ oneGrid }) => oneGrid} ${({ twoGrid }) => twoGrid};
  gap: 4rem;

  margin-top: 0.8rem;

  @media (max-width: 1050px) {
    grid-template-columns: none;
  }
`;
