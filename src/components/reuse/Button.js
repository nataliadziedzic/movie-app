import styled from "styled-components"
import { Link } from 'react-router-dom';
const Button = styled.button`
 width: ${props => props.start ? "240px" : "200px"};
 height: 48px;
 font-size: 20px;
 background: linear-gradient(to right, rgba(165,0,0,0.85) 5%, rgba(0,0,0,0.85) 50%, rgba(165,0,0,0.85) 100%, rgba(0,0,0,0.85) 45%);
 background-size: 200% 100%;
 background-position:right bottom;
 border: none;
 cursor: pointer;
 margin: ${props => (props.start ? "25px auto" : "20px auto")};
 transition: all .7s ease-out;
 @media only screen and (min-width: 375px){
    margin: ${props => (props.start ? "35px auto" : "20px auto")};
}
 @media only screen and (min-width: 768px){
    transform: ${props => (props.start ? "scale(1.3)" : "scale(1.6)")};
    margin: ${props => (props.start ? "35px auto" : "50px auto")};
}
@media only screen and (min-width: 1024px){
    &:hover{
        background-position: left bottom;
    };
}
@media only screen and (min-width: 1024px) and (orientation: portrait){
    transform: scale(1.7);
    margin 70px auto 35px;
}
@media only screen and (min-width: 1200px){
    transform: ${props => (props.start ? "scale(1.5)" : "scale(1.8)")};
    margin 60px auto 35px;
}
 `
export default Button

export const SmallButton = styled(Button)`
width: 120px;
height: 30px;
font-size: 14px;
`

export const StyledLink = styled(Link)`
    overflow: visible;
    text-align: center;
`