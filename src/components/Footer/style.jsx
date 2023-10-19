import styled from "styled-components";

export const FooterStyle = styled.footer`
    margin: 0 auto;
    max-width: 1600px;
    
    div:first-child {
        
        border-bottom: 1px solid #353438;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 4rem;

        @media (max-width: 750px){
            flex-direction: column;
        }

        @media (max-width: 650px) {
            padding: 1rem 0rem;
        }
    }

    div:nth-child(2) {
        display: flex;
        align-items: center;

        padding: 1rem;

        @media (max-width: 650px) {
            padding: 1rem;
        }
    }

    span {
        font-weight: 700;
        color: ${({theme}) => theme.colors.primary};
        font-size: 2rem;
    }

    div {
        display: flex;
        gap: 1rem;
        
        
        a {
            font-size: 0.9rem;
            font-weight: 500;
            color: ${({theme}) => theme.colors.primary};
            
            &:hover {
                color: ${({theme}) => theme.colors.secundary};
            }
        }

        
    }


    div:nth-child(2) {
        div {
            border: none;
            padding: 0rem 1rem 0rem 0rem;
            border-right: 2px solid #353438;
        }


        div:nth-child(2) {
            text-align: start;
            justify-content: start;
            align-items: start;
            border-right: 0rem;

            span {
                width: 100%;
                font-weight: 600;
                font-size: 0.8rem;
                color: ${({theme}) => theme.colors.secundary};
            }
        }

        p {
            @media (max-width: 750px){
                width: 100%;
            flex-direction: column;
            }


            width: 50%;
            color: ${({theme}) => theme.colors.secundary};
            font-weight: 600;
        }
    }

    svg, img {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: #121214;
        position: relative;
        transition: all 0.2s  all ease-in-out;

        &:hover {
            transform: translateY(-10px);
        }
    }

`

export const InfoFooter = styled.div`

    @media (max-width: 750px){
            flex-direction: column;

            div:first-child {
                flex-direction: row;
                border: none !important;
            }

            div {
                span {
                    text-align: center;
                }
            }
    }
`  