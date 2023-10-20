import { styled } from "styled-components";
import { css } from "styled-components";

export const SectionFastStyle = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.purple400};
  }
`;

export const SectionFastStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 85vh;

  @media (max-width: 500px) {
    gap: 0rem;
    height: 100vh;
  }

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: y mandatory;

  dialog {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      padding: 2rem;
      background-color: #121212;
      border-radius: 5px;

      h3 {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    div > div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      button {
        height: 2.5rem;
      }

      input {
        width: 100%;
        height: 2.5rem;
        border-radius: 5px;
        border: 1px solid #757575;
        background: none;

        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const MobileVideo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: end;
  position: relative;
  margin-left: 4.5rem;

  @media (max-width: 500px) {
    video {
      width: 100vw;
      border-radius: 0px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column-reverse;

    gap: 1.5rem;
    align-items: center;
    margin-top: -1rem;

    svg {
      border-radius: 50%;
      padding: 0.6rem;
      background-color: #212124;
    }
  }

  video {
    object-fit: cover;
    object-position: center;
    width: auto;
    width: 28.125rem;
    height: 50rem;
    border-radius: 0.5rem;

    -webkit-overflow-scrolling: touch;
    scroll-snap-align: start;

    &::-webkit-media-controls-timeline {
      display: none;
    }

    &::-webkit-media-controls-fullscreen-button {
      display: none;
    }

    &::after {
      content: "";
      height: 100%;
    }
  }

  h3,
  p {
    width: 85%;
    word-break: break-word;
    color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    position: absolute;
    font-weight: 600;
    bottom: 4%;

    span {
      color: ${({ theme }) => theme.colors.purple400};
    }
  }

  p {
    bottom: 3%;
    width: 91%;
    color: ${({ theme }) => theme.colors.secundary};
  }

  button {
    padding: 0.6rem;
    color: ${({ theme }) => theme.colors.purple400};
    background: none;
    border: none;
  }

  @media (max-width: 720px) {
    div:nth-child(2) {
      position: relative;
      right: 5rem;
      bottom: 2rem;
      svg {
        background: none;
      }
    }

    h3,
    p {
      width: 70%;
      left: 1rem;
    }
  }

  @media (max-width: 500px) {
    video {
      margin: 0 auto;
      width: 100vw;
      height: 100vh;
    }
  }
`;
export const ShareButtons = styled.aside`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "row" : "column")};
  gap: 1rem;

  @keyframes animation {
    0% {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  a {
    animation: animation 0.3s forwards;
    display: flex;
    border-radius: 50%;
    padding: 0.5rem;
    background: #212124;
    border: none;
  }
`;
