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

export const CreateForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.black800};
    background-color: #ffffff;
    width: 100%;


    form {
        display: flex;
        width: 100%;
    }

    form > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    

    div.tox  {
        width: 79rem;
    }

`
export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0.5rem;
    width: 18rem;
    height: 12rem;

    svg {
        margin-bottom: 5rem;
        position: absolute;
        align-self: center;
        fill: #7b9be1;
    }

    span {
        align-self: center;
        position: absolute;
        text-align: center;
        color: #7b9be1;
        font-weight: bold;
    }

    span:after {
        display: block;
        text-align: center;
        font-weight: 500;
        content: "Arraste e solte o arquivo aqui";
    }

    input[type=file]::-webkit-file-upload-button {
        width: 100%;
        height: 100%;
        height: 10rem;
        font-size: 0rem;
        background: none;
        border: 2px dashed #7b9be1;
        border-radius: 10px;
    }
    
    input[type=file] {
        font-size: 0rem;
    }

`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: start;
    font-weight: 500;
    


    p {
        color: #22223E
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const Btoaolegal = styled.button`
    border-radius: 5px;
    width: 7rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-family: 'Montserrat';
    cursor: pointer;

`

export const Oie = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`
