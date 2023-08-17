import { styled } from "styled-components";

export const FormStyled = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;

    img {
        width: 45rem;
    }

    form {
        background-color: ${({ theme }) => theme.colors.purple900};
        width: 30rem;
        padding: 3rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
    }

    div {
        width: 100%;
    }

    input, button {
        width: 100%;
        height: 3rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;

        border: none;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.colors.purple800};
    }

`

export const PasswordStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.purple800};
    border-radius: 5px;
    padding: 0rem 1rem 0rem 0rem;


    input {
        border-radius: 5px;
        filter: none;
    }

    button {
        width: auto;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }
`
