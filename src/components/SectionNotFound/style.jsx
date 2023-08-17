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

    h1 {
        color: ${({ theme }) => theme.colors.primary};
    }


`