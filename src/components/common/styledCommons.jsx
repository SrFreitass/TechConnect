import { styled, css } from "styled-components";

export const GridArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${({ isHome }) =>
    isHome
      ? ""
      : css`
          column-gap: 1.5rem;
        `}

  @media (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
  }
`;

export const SectionFeedStyle = styled.section`
  ${({ isHome }) =>
    isHome
      ? ""
      : css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}

  @media (max-width: 1270px) {
    div:nth-child(1) {
      width: 100%;
      margin-left: -0.5rem;
      padding: 0.5rem 0rem;
    }
  }
`;
