import { styled } from "styled-components"
import { css } from "styled-components"


export const SectionFastStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    overflow-y: auto;
    
    &::-webkit-scrollbar {
        display: none;
    }

    scroll-snap-type: y mandatory;

    height: 100vh;

    video {
        height: 50rem;

        border-radius: 10px;
        

        -webkit-overflow-scrolling: touch;
        scroll-snap-align: start;
    }




`

export const MobileVideo = styled.div`




`