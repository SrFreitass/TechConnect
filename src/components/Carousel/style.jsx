import { styled } from "styled-components";

export const CarouselStyled = styled.section`
  div:first-child {
    margin: 0 auto;
    width: 100%;
    height: 16rem;
    background-color: ${({ theme }) => theme.colors.black800};
  }

  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  a:first-child {
    align-self: start;
  }

  p {
    align-self: start;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 1;
    filter: brightness(55%);
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.purple400};
  }

  h1 {
    position: relative;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
  }

  p {
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.gray200};
    font-size: 1rem;
  }

  a {
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.purple400};
    font-size: 1.25rem;

    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
