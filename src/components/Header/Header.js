import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const LogoContainer = styled.header`
height: 16vh;
@media only screen and (orientation: landscape){
    height: auto;
}
    img{
        margin: 10px -5px;
        transform: scale(0.8);
    }
   @media only screen and (min-width: 720px){
       img{
           transform: scale(1);
           margin: 20px 0 0 30px;
       }
   }
   @media only screen and (min-width: 1024px){
       height 16vh;
    img{
        transform: scale(1.2);
        margin: 28px 0 0 55px;
    }
}
`;

const Header = () => (
  <LogoContainer>
    <img src={logo} alt="logo" />
  </LogoContainer>
);

export default Header;
