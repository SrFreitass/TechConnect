import { styled } from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `


export const ArticleStyled = styled.div`
    display: flex;
    gap: .6rem;
    min-width: 40rem;


    div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
     @media (max-width: 1050px) (min-width: 651px) {
     }

     @media (max-width: 650px) {

     }

    /* flex-direction: column; */
    /* color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    width: 70%;

    img {
        height: 25rem;
        object-fit: cover;
    } */

`

export const Info = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secundary};
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
    display: flex;
    gap: 1rem;
    

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    textarea {
        width: 100%;

        padding: 0.5rem;

        border: none;
        border-radius: 5px;

        background-color: #212124;

        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
    }

    textarea:focus {
        transition: ease-in-out 0.1s;
        outline: none;
        border: 1px solid #8A8AE0;
    }


    img {
        width: 100%;
        height: 25rem;
        object-fit: cover;
        border-radius: 5px;
    }

    h2, h3, h4, h5, h6 {
        color: #eeeeee;
    }
    
    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        font-size: 2rem;
        
    }

    h2 {
        color: ${({ theme }) => theme.colors.secundary};
        font-weight: 500;
        font-size: 1.2rem;
    }

    p {
        
        color: #cdcccc;
        font-weight: 400;
    }


    ul {
        display: flex;
        flex-direction: column;
        margin-left:1.5rem;
        gap: .8rem;
    }

    li {
        color: ${({ theme }) => theme.colors.primary};  
    }

    h6 {
        color: ${({ theme }) => theme.colors.purple400};
        font-weight: 500;
        font-size: 1.2rem;
    }

    div {
        aside {
            display: none;
        }
    }

    @media (max-width: 850px) {
        aside:first-child {
            display: none;
        }

        div > aside {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    @media (max-width: 650px) {
        img {
            height: 100%;
            object-fit: contain;
        }
    } 
`

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row !important;

    padding: 1rem;

    border: solid 1px ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;

    div {
        display: flex;
            flex-direction: column;
            gap: .3rem;
    }

    h4 {
        color: ${({ theme }) => theme.colors.primary}
    }

    p {
        color: ${({ theme }) => theme.colors.secundary}
    }

    button {
        display: flex;
        background: none;
        border: none;
    }

        svg {
            color: ${({theme}) => theme.colors.purple400}
        }

        svg:hover {
            filter: drop-shadow(0 0 0.75rem crimson);
            transition: linear 0.2s;
            fill: red;
            cursor: pointer;
        }

    
`