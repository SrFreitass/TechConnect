import { styled } from "styled-components";

export const NewsContainer = styled.section`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 6fr 1.5fr;
    column-gap: 1rem;


    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }   

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    div:nth-child(2) > a {
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.primary};
    }

    div:nth-child(2) > p {
        color: ${({theme}) => theme.colors.secundary};
        font-weight: 500;
    }
`

export const News = styled.article`
    width: 100%;
    height: 17rem;
    display: flex;
    gap: 1rem;

    border-bottom: solid 1px;
    padding-bottom: 1.5rem;

    img {
        object-fit: cover;
        border-radius: 10px;
        width: 30rem;
    }
`