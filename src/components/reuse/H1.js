import styled from "styled-components"
const H1 = styled.h1`
    font-style: normal;
    font-size: 30px;
    text-align: center;
    background: linear-gradient(to right, rgb(255,255,255), rgb(165,0,0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: ${props => (props.start ? "0" : "7%")};
    @media (min-width: 360px){
        font-size: ${props => (props.start ? "30px" : "33px")};
        margin: ${props => (props.start ? "0" : "10% 0")};
    }
    @media (min-width: 375px){
        font-size: 33px;
    }
    @media (min-width: 768px){
            font-size: 45px;
     }
     @media (min-width: 1200px){
        font-size: 50px;
        margin: ${props => (props.start ? "0" : "4% 0")};
    }
    @media (min-width: 1024px) and (orientation: portrait){
        font-size: 53px;
    }
 `

export default H1