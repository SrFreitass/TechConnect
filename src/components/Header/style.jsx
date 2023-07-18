import { styled } from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    padding: 4rem 0rem;

    h1 {
        color: ${(props) => props.theme.colors.primary };
    }

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
        border-right: 1px solid ${(props) => props.theme.colors.secundary};
        padding-right: 1rem;
        gap: 1rem;
    }

    ul:nth-child(2) {
        gap: 1rem;
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
`