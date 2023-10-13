import { styled } from "styled-components";

export const StyledLoader = styled.h1`        
    height: 95vh;
    font-size: 3rem;
    color: ${({theme}) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    
    animation: float ease-in-out 2s infinite;


    @keyframes float {
        0% {
            margin-top: 0rem;
        }

        50% {
            margin-top: 1rem;
        }

        100% {
            margin-top: 0rem;
        }
    }

`