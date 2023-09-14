import { styled, css } from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    padding: 4rem 0rem;

    span {
        font-size: 2rem;
        font-weight: 700;
        color: ${({theme}) => theme.colors.primary};
    }

    span:nth-child(2) {
        display: none;
    }

    nav {
        display: flex;
    }

    svg:nth-child(4) {
        display: none;
    }

    ul {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      padding-left: 1rem;
      gap: 0.4rem;
    }

    ul:first-child {
        padding-right: 1rem;
        gap: 1rem;
    } 

    ul:nth-child(2) {
        display: none;
    }

    ul:nth-child(3) {
        display: flex;
        gap: 1rem;
        border-left: 1px solid ${({ theme }) => theme.colors.secundary};
    }

    li {
        list-style: none;
        color: ${(props) => props.theme.colors.secundary};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.secundary}
    }

    a:hover {
        color: ${(props) => props.theme.colors.primary};
        transition: .2s;
    }

    div:nth-child(2) {
        display: none;
    }


    @media (max-width: 850px) {

        span {
            display: none;
        }

        span:nth-child(2) {
            display: block;
        }

         svg:nth-child(4) {
            display: flex;
         }

        ul:nth-child(3) {
            display: none;
        }

        ul {
            display: none;
        }

        div:nth-child(2) {
            display: flex;
            justify-content: flex-end;

        }

        
        @keyframes Animation {
        0% {
            transform: translateX(100%);
        } 100% {
            transform: translateX(0);
        }
    }

        ${({ menu }) => menu && css`
            ul {
                width:  22rem;
                height: 101%;
                background-color: #1d1d1d;
                backdrop-filter: blur(5px);

            
            }


            ul:nth-child(2) {
                animation: Animation 0.3s forwards;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-top: -3rem;
                margin-right: -1.5rem;
                position: fixed;
                
                svg {
                    margin-top: 2rem;
                }

                li:last-child {
                    display: flex;
                    align-items: center;

                    svg {
                        margin-top: 0;
                    }
                }

                li {
                    font-weight: 500;
                }

                strong {
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.primary}
                }
            }
        `}
         

    }
`