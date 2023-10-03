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
    justify-content: center;
    flex-direction: column;

    gap: 1rem;

    div:first-child {
        text-align: center;
    }

    ${({isLogged}) => isLogged && css`
        div {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            button {
                max-width: 20rem;
                margin: 0 auto;
            }
        }

    `}

    input[type="text"], input[type="password"], input[type="email"]{
        height: 3rem;
        width: 100%;
        max-width: 25rem;
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

export const InputPassword = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;

    div:nth-child(2) {
        height: 3rem;
        display: flex;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.purple400};
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.primary};

        svg {
            margin-right: .5rem;
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    svg {
        color: #ab2c2c;
        min-width: 24px;
        min-height: 24px;
    }


     input[type="password"], input[type="text"] {
        border: none;
     }
`