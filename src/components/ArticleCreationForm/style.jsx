import { styled } from "styled-components";

export const StyleArticleCreationForm = styled.div`
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
        content: "Ou arraste para cá.";
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

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`

export const ButtonDefault = styled.button`
    border-radius: 5px;
    width: 7rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.purple700};
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-family: 'Montserrat';
    cursor: pointer;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        width: 100%;
    }
    
`

