import { styled } from "styled-components";

export const MainStyled = styled.main`


    display: flex;
    align-items: start;
    justify-content: start;
    gap: 10rem;
    
    div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

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
            width: 20rem;

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


    @media (max-width: 925px) {
        gap: 5rem;



    }

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            width: 100%;
            max-width: 30rem;
            display: flex;
            justify-content: center;

            input[type="text"] { 
                height: 3rem;
                width: 100%;

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

            div:nth-child(3) {
                display: flex;
                justify-content: end;
                gap: 1.5rem;
                width: 100%;
            }
        }
    }

`