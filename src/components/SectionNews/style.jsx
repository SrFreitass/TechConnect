import { styled } from "styled-components";

export const NewsStyled = styled.article`
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