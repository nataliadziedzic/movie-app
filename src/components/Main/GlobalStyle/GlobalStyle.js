import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    height: 100vh;
    width: 100vw;
    background-color: rgba(4,7,35,0.85);
}
`

export default GlobalStyle