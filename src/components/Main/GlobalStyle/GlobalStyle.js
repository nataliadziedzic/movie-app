import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: rgb(255, 255, 255);
    overflow: hidden;
    outline: none;

}
body{
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    background-color: rgba(4,7,35,0.85);
}
#root {
  height: 100%;
  width: 100%;
}
::selection {
    background: #ffb7b7;
  }
  ::-moz-selection {
    background: #ffb7b7;
  }
`

export default GlobalStyle