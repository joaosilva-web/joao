import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #1A171C;
        color: #FFFFFF;
    }

    button {
        height: 56px;
        border-radius: 10px;
    }

`