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
