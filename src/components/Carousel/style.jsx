import { styled } from "styled-components";

export const CarouselStyled = styled.section`
    
    .swiper-button-prev, .swiper-button-next {
        color: ${((props) => props.theme.colors.purple700)};
    }

    .swiper-pagination-bullet {
        background-color: ${((props) => props.theme.colors.purple400)}
    }

    overflow: auto;
    display: flex;
    margin: 0 auto;
    width: 110rem;
    height: 15rem;
    background-color: ${(props) => props.theme.colors.black800};

    div {
        align-self: center;
        margin: 0 auto;
    }

    h1 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 2.5rem;
    }

    p {
        color: ${(props) => props.theme.colors.gray200};
        font-size: 1rem;
    }

    a {
        color: ${(props) => props.theme.colors.purple400};
        font-size: 1.25rem;
    } 
`