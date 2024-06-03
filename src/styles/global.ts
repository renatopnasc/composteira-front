import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
  }

  body, input, button, textarea {
    font-size: 1rem;
  }

  body {
    font-family: "Poppins", sans-serif;
    background: #BDBDBD,
  }

`
