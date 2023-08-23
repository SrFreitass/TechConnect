import { styled } from "styled-components";

export const AsideStyled = styled.aside`
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    gap: 1.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.secundary};

    button:first-child {
        border-radius: 8px;
        height: 2.5rem;
        background-color: #8A8AE0;
        justify-content: center;
        font-weight: 600;

        a {
            color: #ffff;
            text-decoration: none;
        }
    }

    button { 
        cursor: pointer;
        display: flex;
        align-items: center;
        border: none;
        background: none;
    }

    button:nth-child(2) {
        p {
            color: #8A8AE0;
        }
    }

    p {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secundary}
    }
`
