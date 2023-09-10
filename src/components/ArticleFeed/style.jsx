import { styled } from "styled-components";

export const NewsStyled = styled.article`
    width: 100%;
    display: flex;
    gap: 1.5rem;

    padding: 1rem 0rem;

    border-bottom: solid 1px ${({ theme }) => theme.colors.secundary};
    
    img {
        object-fit: cover;
        border-radius: 5px;
        min-width: 30rem;
        height: 17rem;
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



    @media (max-width: 1050px) (min-width: 651px) {

        h3 {
            display: none;
        }

        img {
            object-fit: cover;
            border-radius: 5px;
            height: 10rem;
            min-width: 20rem;
            width: 18rem;
        }
     }

     @media (max-width: 650px) {
        flex-direction: column;

        h3 {
            display: none;
        }

        img {
            border-radius: 6px;
            width: 100%;
            min-width: 100%;
            height: 15rem;
        } 
     }

`


export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row !important;
    margin-top: 1rem;
    gap: 1.5rem;

`

export const AsidePanel = styled.aside`
    border-radius: 5px;
    margin-top: 1rem;

    
    h3 {
        padding: 0rem 1rem;
    }
    
    div {
        padding: .6rem;
        border: solid 1px ${({ theme }) => theme.colors.secundary};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: .4rem;
        ul {
            display: flex;
            gap: .5rem;
            flex-wrap: wrap;
            padding: 0rem 1rem;

            list-style: none;
        }
    }

    @media (max-width: 1050px) {
        display: none;
     }

`