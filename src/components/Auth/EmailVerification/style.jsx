import { styled } from "styled-components";

export const VerificationContainer = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    
    h1 {
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        color: ${({ theme }) => theme.colors.secundary};
    }
    
    span {
        color: ${({ theme }) => theme.colors.purple400};
        text-decoration: underline;

        cursor: pointer;
    }

`