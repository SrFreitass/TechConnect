import { styled } from "styled-components";

export const NewsStyled = styled.article`
    width: 100%;
    height: 17rem;
    display: flex;
    gap: 1.5rem;

    padding: 1rem 0rem;

    border-bottom: solid 1px ${({ theme }) => theme.colors.secundary};
    
    img {
        object-fit: cover;
        border-radius: 5px;
        width: 30rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary};
    }

    h3, h4, p {
       color: ${({ theme }) => theme.colors.secundary};
    }

    h3, h4, p {
        font-weight: 500;
    }


`


export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row !important;
    margin-top: 1rem;
    gap: 1.5rem;

`

export const AsidePanel = styled.aside`
    border: solid 1px ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    margin-top: 1rem;

    h3 {
        padding: 0rem 1rem;
    }

    div {
        ul {
            display: flex;
            gap: .5rem;
            flex-wrap: wrap;
            padding: 0rem 1rem;

            list-style: none;
        }
    }

`