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

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    height: 2.5rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    background-color: ${(props) => props.theme.colors.purple700};
    filter: drop-shadow(0px 0px 20px ${(props) => props.theme.colors.purple700});
    border-radius: 5px;
    padding: 1rem;
    color: ${(props) => props.theme.colors.primary};

`   