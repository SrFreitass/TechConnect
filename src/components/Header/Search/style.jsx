import { styled } from 'styled-components';
import { css } from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;

    svg {
        margin-top: 0 !important;
    }

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
        
    
        &:focus {
            outline: none;
        }
    }

    button {
        display: none;
    }

    ${({ search }) => search && css`
        background-color: #121212;  
        border: solid 1px ${({theme}) => theme.colors.purple400};
        border-radius: 5px;

        

        form {
            width: 15rem; 
            padding: .4rem .4rem;
            
        }
        
        input {
            border-radius: 5px;
            transition: all ease-in-out 0.3s;
            width: 100%;    
            color: white;
            
        }

 
    
    `} 



`