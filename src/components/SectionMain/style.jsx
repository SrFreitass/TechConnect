import { styled } from "styled-components";

export const SectionFODA = styled.section`


    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-child(2) {
        margin-top: 10%;
        width: 30rem;
        height: 30rem;
        background-color: ${({theme}) => theme.colors.purple400};
        border-radius: 50%;
        filter: blur(10rem)
        
    }


`

export const SectionContainer = styled.section`

    div {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 75vh;
        justify-content: center;
        gap: 1rem;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2.5rem;
        text-align: center;
        font-weight: bold;
        -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	    animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

        span {
            /* padding: .5rem .5rem;
            border-radius: 10rem;
            background-color: ${({theme}) => theme.colors.purple500}; */
            color: ${({theme}) => theme.colors.purple500};
        }
    }

    h3 {
        font-weight: 500;
        text-align: center;
        width: 70%;
        color: ${({theme}) => theme.colors.secundary};
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
    justify-content: center;

    &:hover {
        transition: all 0.1s;
        filter: drop-shadow(0px 0px 20px ${({ theme }) => theme.colors.purple700});
    }

    height: 2.5rem;
    font-size: 1.2rem;
    padding: 1rem;  

    border: none;
    border-radius: 5px;

    background: none;
    background-color: ${({ theme }) => theme.colors.purple700};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
   
    
    
     
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }

`   