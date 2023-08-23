import { styled } from "styled-components"

export const Section404 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 80vh;


    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        border-radius: 5px;
    }


    h1 {
        font-size: 15rem;
        color: ${({ theme }) => theme.colors.secundary};

        &:hover {
            transition: ease-in-out 1s;
            transform: rotate(360deg);
        }

    }

    p {
        color: ${({ theme }) => theme.colors.secundary};
        font-size: 1.2rem;
    }


`