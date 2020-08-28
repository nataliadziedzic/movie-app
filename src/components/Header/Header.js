import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo.png"
const LogoContainer = styled.header`
height: 15vh;
min-height: auto
@media (orientation: landscape)  and (max-width: 1023px){
    height: 35vh
}
@media (orientation: landscape)  and (min-width: 1200px){
    height: 20vh
}
`
const Logo = styled.div`
height: 100%;
    img{
        margin: 10px -5px;
        transform: scale(0.8);
    }
   @media (min-width: 720px){
       img{
           transform: scale(1);
           margin: 20px 0 0 30px;
       }
   }
   @media (min-width: 1024px){
    img{
        transform: scale(1.2);
        margin: 28px 0 0 55px;
    }
}
`

function Header() {
    return (
        <LogoContainer>
            <Logo><img src={logo} alt="logo" /></Logo>
        </LogoContainer>
    )
}

export default Header