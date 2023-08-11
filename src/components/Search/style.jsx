import { styled } from 'styled-components';
import { css } from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
    border-radius: 5px;

    form {
    display: flex;
    background-color: none;
    width: 0;
    transition: all ease-in-out 0.3s;
    }

    input {
        border: none;
        background: none;
        width: 0.1rem;
    }

    button {
        display: none;
    }

    ${({ search }) => search && css`
        background-color: #dbdbdb;  

        form {
        width: 10rem; 
         
        }

        input {
        transition: all ease-in-out 0.3s;
        width: 100%;    
        }
    `} 



`