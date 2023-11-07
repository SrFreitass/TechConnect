import { styled, css } from "styled-components";

export const HeaderContainer = styled.header`
  @keyframes down {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-5px);
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  padding: 4rem 0rem;

  nav {
    display: flex;
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

    ${({ search }) =>
      search &&
      css`
        li {
          display: none;
        }
      `}
  }

  @media (max-width: 850px) {
    ul:first-child,
    ul:nth-child(2) {
      display: none;
    }
  }

  li {
    list-style: none;
    color: ${(props) => props.theme.colors.secundary};
  }

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.secundary};
  }

  li:hover,
  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  div:nth-child(2) {
    display: none;
  }
`;

export const Logo = styled.div`
  a {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  a:nth-child(2) {
    display: none;
  }

  @media (max-width: 850px) {
    a:first-child {
      display: none;
    }

    a:nth-child(2) {
      display: block;
    }
  }
`;

export const DropDown = styled.ul`
  display: flex;
  gap: 1rem;
  border-left: 1px solid #353438;

  div {
    animation: down 0.2s forwards;
    margin-left: -5.5rem;
    margin-top: 7.5rem;
    display: flex !important;
    position: absolute;
    background-color: #242424;
    border-radius: 5px;
    width: 8rem;
    padding: 0.8rem 1rem;
    z-index: 100;

    &::after {
      content: "";
      width: 1rem;
      height: 0.5rem;
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
      gap: 1rem;
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.secundary};
      font-size: 1.2rem;
      font-weight: 600;

      &:hover {
        color: ${({ theme }) => theme.colors.purple400};
      }

      a {
        color: ${({ theme }) => theme.colors.purple600};
        font-size: 1rem;
      }
    }
  }
`;

export const HeaderContainerLoader = styled.div`
  @keyframes show {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .loader {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: fixed;
    overflow: hidden;
  }

  &::after {
    content: "";
    box-sizing: border-box;
    width: 0;
    height: 4.8px;
    background: ${({ theme }) => theme.colors.purple400};
    position: absolute;
    top: 0;
    left: 0;
    animation: animFw 1s linear;
  }

  @keyframes animFw {
    0% {
      width: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      opacity: 0;
    }
  }
`;
