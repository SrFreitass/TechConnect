import { styled, css } from "styled-components";

export const ContainerInputForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div {
        display: flex;
        align-items: center;
        gap: .4rem;

        color: #ab2c2c;
    }

`

export const FormStyled = styled.form`

    width: 90%;
    max-width: 25rem;
    height: 100vh;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;


    div:first-child {
        text-align: center;
    }

    input {
        height: 3rem;
        width: 25rem;

        font-size: 1rem;
        padding: 1rem;

        color: ${({ theme }) => theme.colors.primary};
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.secundary};
        }

        &:focus {
            outline: none;
        }

        background: none;
        border: 2px solid ${({ theme }) => theme.colors.purple400};
        border-radius: 8px;
    }



    label {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        text-align: center;
        color: ${({ theme }) => theme.colors.secundary};
    }

    span {
        color: #ab2c2c;
    }

    button {
        width: 100%;
        height: 3rem;
        filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.purple700});
    }

`

export const ContainerCheckForm = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
    gap: .4rem;

    

    input[type="checkbox"] {
        width: 1rem;
    }
`

export const ProgressForm = styled.progress`
    width: 100%;
    height: 1rem;

    position: fixed;
    top: -.4rem;

    accent-color: ${({ theme }) => theme.colors.purple700};
`