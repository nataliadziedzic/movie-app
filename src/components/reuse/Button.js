import styled from "styled-components"
const Button = styled.button`
 width: 240px;
 height: 48px;
 font-size: 20px;
 background: rgba(165, 0, 0, 0.85);
 background: linear-gradient(to right, rgba(165,0,0,0.85) 5%, rgba(0,0,0,0.85) 50%, rgba(165,0,0,0.85) 100%, rgba(0,0,0,0.85) 45%);
 background-size: 200% 100%;
 background-position:right bottom;
 border: none;
 cursor: pointer;
 margin 25px auto;
 transition: all .7s ease-out;
 @media (min-width: 375px){
    margin 35px auto;
 }
 @media (min-width: 768px){
    transform: scale(1.3);
}
@media (min-width: 1024px){
    &:hover{
        background-position: left bottom;
    };
}
@media (min-width: 1200px){
    transform: scale(1.5);
    margin 60px auto 35px;
}
@media (min-width: 1024px) and (orientation: portrait){
    transform: scale(1.7);
    margin 70px auto 35px;
}

 `

export default Button