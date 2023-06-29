import { styled } from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    justify-content: center;
    gap: 2rem;

    h1 {
        font-size: 2rem;
    }
    
    @keyframes colorOne {
        0% {
            color: ${(props) => props.theme.colors.primary};
        }
        
        100% {
            color: #4d4db5;
        }
    }

    h1 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 2rem;
        font-weight: bold;
        -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	    animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }


    div {
        display: flex;
        gap: 1rem;
    }

    div > button {
        display: flex;
        align-items: center;
        height: 2.5rem;
        font-size: 1.2rem;
        border: none;
        background: none;
        border: #4d4db5 1px solid;
        background-color: #4d4db5;
        filter: drop-shadow(0px 0px 20px #4d4db5);
        border-radius: 5px;
        padding: 1rem;
        color: ${(props) => props.theme.colors.primary};
    }
    
    @-webkit-keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
    }
    @keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
    }

`
