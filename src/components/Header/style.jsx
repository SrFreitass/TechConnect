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

        
        ${({ search }) => search && css` 
            li {
                display: none;
            }
        `}
        
        
    }
    

    ul:nth-child(2) {
        display: none;
    }


    @keyframes down {
        to {
            transform: translateY(0px);
        }

        from {
            transform: translateY(-20px);
        }
    }


    ul:nth-child(3) {
        
        display: flex;
        gap: 1rem;
        border-left: 1px solid ${({ theme }) => theme.colors.secundary};

        li:nth-child(2) {
            display: none;
        }
        


        div{

            


            div {
                animation: down 0.2s forwards;
                margin-left: -7rem;
                margin-top: 1rem;
                display: flex;
                position: absolute;
                background-color: #242424;
                border-radius: 5px;
                width: 10rem;
                padding: 1rem;
                z-index: 100;


                &::after {
                    content: '';
                    width: 1rem;
                    height: .5rem;
                    background-color: #242424;
                    position: absolute;
                    left: 75%;
                    bottom: 100%;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }


                button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2rem;
                    background: none;
                    border: none;
                    color: ${({theme}) => theme.colors.purple400};
                    font-size: 1.2rem;
                    font-weight: 500;
                    
                    a {
                        color: ${({theme}) => theme.colors.purple400};
                        margin-left: -1rem;
                        font-size: 1rem;
                    }
                }
            }
            
        }
    }
    


    li {
        list-style: none;
        color: ${(props) => props.theme.colors.secundary};
    }

    a {
        display: flex;
        align-items: center;
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

        padding: 3rem 0rem;

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
                z-index: 99;
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