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

    h2 {
        color: ${({theme}) => theme.colors.primary};
        margin-bottom: 1rem;
    }

    bold > a {
        display: flex;
        align-items: center;
        gap: .3rem;
        text-align: start;
        font-weight: 600;
        color: ${({theme}) => theme.colors.purple500};
    }


    div:first-child {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    ${({isLogged}) => isLogged && css`
        div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background-color: #121212;

            button {
                max-width: 20rem;
                margin: 0 auto;
            }
        }

    `}

    input:focus + svg {
        fill: ${({ theme }) => theme.colors.purple400};

    }

    div > svg:nth-child(2) {
        position: absolute;
        margin-top: .8rem;
        margin-left: 1rem;
    }

    svg:nth-child(3) {
            position: absolute;
            align-self: end;
            margin-top: 0.8rem;
            margin-right: 1rem;
        }


    input[type="text"], input[type="password"], input[type="email"]{
       

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active{
            -webkit-background-clip: text;
            -webkit-text-fill-color: #fff;
            transition: background-color 5000s ease-in-out 0s;
            box-shadow: inset 0 0 20px 20px #121212;
        }
        transition: .1s ease-in-out;
        height: 3.125rem;
        width: 100%;
        max-width: 25rem;
        font-size: 1rem;
        padding: 0rem 1rem 0rem 3rem;

        color: ${({ theme }) => theme.colors.primary};
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.secundary};
        }


        border: 2px solid ${({theme}) => theme.colors.background};

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.purple400};

        }


        background-color: #121212;

        border-radius: 5px;

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
        width: 99%;
        margin: 0 auto;
        height: 3.125rem;
    }

    
`

export const ContainerCheckForm = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
    gap: .4rem;

    h4 {
        text-align: center;
        color: ${({theme}) => theme.colors.secundary};
        font-weight: 500;
    }


`

export const ProgressForm = styled.progress`
    width: 100%;
    height: 1rem;

    position: fixed;
    top: -.4rem;

`
