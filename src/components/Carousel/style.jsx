import { styled } from "styled-components";

export const CarouselStyled = styled.section`
    
    .swiper-button-prev, .swiper-button-next {
        color: ${(({ theme }) => theme.colors.purple700)};
    }

    .swiper-pagination-bullet {
        background-color: ${(({ theme }) => theme.colors.purple400)}
    }

    display: flex;
    margin: 0 auto;
    height: 15rem;
    background-color: ${({ theme }) => theme.colors.black800};

    div {
        align-self: center;
        margin: 0 auto;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2.5rem;
    }

    p {
        color: ${({ theme }) => theme.colors.gray200};
        font-size: 1rem;
    }

    a {
        color: ${({ theme }) => theme.colors.purple400};
        font-size: 1.25rem;
    } 
`