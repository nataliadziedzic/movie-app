import styled from "styled-components"
const H1 = styled.h1`
    font-style: normal;
    font-size: 30px;
    text-align: center;
    background: linear-gradient(to right, rgb(255,255,255), rgb(165,0,0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: 375px){
        font-size: 33px;
    }
    @media (min-width: 768px){
            font-size: 45px;
     }
     @media (min-width: 1200px){
        font-size: 50px;
    }
    @media (min-width: 1024px) and (orientation: portrait){
        font-size: 53px;

    }
 `

export default H1