import { styled } from "styled-components";

export const ContainerComments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


    section {
        display: flex;
        flex-direction: column;
        align-items: end;

        button {
            position: relative;
            bottom: 3.5rem;
            right: .5rem;

        }
    }

    span {
        width: 100%;
        border-top: 1px solid #757575;
    }

    button {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
    }


    textarea {
        max-width: 100%;
        resize: none;
    }

    @media (max-width: 1050px) {
        textarea {
            max-height: 15rem;
        }
     }
`

export const Nocomments = styled.div`

    
    width: 100%;
    border: 1px solid #757575;
    padding: 1rem;
    border-radius: 5px;
   
    span {
        color: ${({theme}) => theme.colors.primary};
        text-align: center;
        font-weight: 600;
    }
`