import { styled, css } from "styled-components";

export const GridArticle = styled.div`

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1260px) {
      display: flex;
      flex-direction: column;
      grid-template-columns: none;
    }

    ${({ isHome }) =>
      isHome
        ? ""
        : css`
            column-gap: 1.5rem;
            article {
      img {
        width: 25rem;
        height: 15rem;
        object-fit: cover;
      }
          `}


    }


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

          div > p:nth-child(2) {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.secundary};
            font-weight: 400;
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
            padding-bottom: 0.5rem;
          }
        `}
`;
