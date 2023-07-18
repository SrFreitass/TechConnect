import { styled } from "styled-components";

export const FooterStyled = styled.footer`
    margin-top: 10rem;
    padding: 1rem 0rem;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.colors.black800};

    p {
        width: 50%;
        text-align: center;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray200};
    }

   ul {
        display: flex;
        list-style: none;
        gap: 2rem;
   }


   a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.gray600};
        border-radius: 50%;
        padding: 0.3rem;
   }


`