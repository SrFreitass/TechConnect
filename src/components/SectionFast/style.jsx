import { styled } from "styled-components"
import { css } from "styled-components"


export const SectionFastStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MobileVideo = styled.div`

    display: flex;

    div {
        display: flex;
        flex-direction: column;
    }

    video {
        width: 20rem;
        height: 40rem;
        object-fit: cover;
        position: absolute;
        z-index: -1;
        filter: brightness(20%);

        ${({ status }) => status && css`
            filter: brightness(100%);
        `}
    }

    button {
        border: none;
        background: none;
        width: 20rem;
        height: 40rem;

        font-size: 1.5rem;

        color: ${({ theme }) => theme.colors.primary};
    }

    div {
        padding: 0rem 1rem;
        color: ${({ theme }) => theme.colors.primary};
        position: relative;
        z-index: 1;
        bottom: 3.125rem;

        p {
            color: ${({ theme }) => theme.colors.secundary};
            font-weight: 500;
        }
    }

`