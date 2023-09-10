import { styled } from "styled-components"
import { css } from "styled-components"


export const SectionFastStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 80vh;

    overflow-y: auto;
    
    &::-webkit-scrollbar {
        display: none;
    }

    scroll-snap-type: y mandatory;
`


export const MobileVideo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: start;
    position: relative;

    video {
        object-fit: cover;
        object-position: center;
        z-index: 1;

        width: 25vw;
        min-width: 25rem;
        height: 80vh;
        border-radius: .5rem;

        -webkit-overflow-scrolling: touch;
        scroll-snap-align: start;
    
        &::-webkit-media-controls-timeline {
            padding: 0rem;
            width: 100%;
            background-color: ${({ theme }) => theme.colors.purple400};
        }

        &::-webkit-media-controls-fullscreen-button {
            display: none;
        }
        
    }
    h3, p {
        color: ${({ theme }) => theme.colors.primary};
        padding: 1rem;
        position: absolute;
        bottom: 7%;
        z-index: 1;
        font-weight: 600;

        span {
            color: ${({ theme }) => theme.colors.purple400};
        }
    }
    p {
        color: ${({ theme }) => theme.colors.secundary};
        bottom: 4%;
    }


    div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 25vw;
    min-width: 25rem;

    button  {
        padding: 0.6rem;
        color: ${({ theme }) => theme.colors.purple400};
        background: none;
        border: none;
    }

}




`
export const ShareButtons = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @keyframes animation {
        0% {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        } 100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    button:first-child {
        animation: none;
    }

        button {
        animation: animation 0.3s forwards;
        display: flex;
        border-radius:50%;
        padding: 0.5rem;
        background: #212124;
        border: none;
    }
    
    @media (max-width: 850px) {
        display: none;
    }
    `