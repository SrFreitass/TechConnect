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