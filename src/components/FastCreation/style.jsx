import { styled } from "styled-components";

export const MainStyled = styled.main`
    height: 100vh;
    width: 100%;


    display: flex;
    align-items: start;
    justify-content: start;
    gap: 10rem;
    
            h2 {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primary};

            span {
                color: ${({ theme }) => theme.colors.purple400};
            }
        }
    
    form {

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="text"] { 
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

}
    video {
        border-radius: 10px;
        width: 30rem;
        height: 50rem;
        object-fit: cover;
        
    }

`