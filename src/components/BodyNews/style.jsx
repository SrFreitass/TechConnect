import { styled } from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export const ArticleStyled = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    width: 70%;

    img {
        height: 25rem;
        object-fit: cover;
    }

`

export const Info = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({theme}) => theme.colors.secundary};
    gap: 0.5rem;


    h1 {
        color: ${({ theme }) => theme.colors.primary};
    }
    
    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.secundary};
    }

    p {
        color: ${({ theme }) => theme.colors.gray200};
    }

    time {
        color: ${({ theme }) => theme.colors.gray200}; 
    }

`

export const ArticleContainerStyled = styled.main`

    
    div {
    display: flex;  
    flex-direction: column;
    gap: 1.25rem
    }

    textarea {
        width: 100%;

        padding: 0.5rem;

        border: none;
        border-radius: 5px;

        background: none;

        color: ${({theme}) => theme.colors.primary };
        font-size: 1rem;
    }

    textarea:focus {
        transition: ease-in-out 0.1s;
        outline: none;
        border: 1px solid #8A8AE0;
    }

    section {
        background-color: #212124;
    }

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
    }

    h3 {
       color: #8A8AE0;
    }

    h1 {
        color: ${({theme}) => theme.colors.primary };
        font-weight: 600;
    }

    h2 {
        color: ${({theme}) => theme.colors.secundary };
        font-weight: 500;
    }

    p {
        color: #f7f7f7;
        font-weight: 500;
    }

    strong {
        font-size: 1.3rem
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    li {
        color: ${({theme}) => theme.colors.primary}
    }
`