import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
        
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: 'Montserrat', 'Arial', 'sans-serif';
    }

`