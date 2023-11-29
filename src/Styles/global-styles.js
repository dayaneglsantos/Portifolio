import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'JetBrains Mono', monospace;
  }

  html {
    scroll-behavior: smooth;
  }
`

export default GlobalStyle
