import styled from 'styled-components';
import { Wrapper } from '../reuse/Wrapper';
import { Container } from '../reuse/Container';

export const StartPage = styled(Container)`
img{
    transform: scale(0.6);
    margin: -40px 0 30px 30px;
}
@media only screen and (min-width: 375px){
   img{
       transform: scale(0.7);
       margin: -25px 0 0 30px;
   }
}
@media only screen and (min-width: 768px){
    img{
        transform: scale(1);
        margin: 50px 0 0 30px;
    }
 }
}
@media only screen and (min-width: 1024px) and (orientation: landscape){
    flex-direction: row;
    justify-content: center;
    img{
        transform: scale(1.1);
        margin: 0 220px 135px 0;
    }
 }
 @media only screen and (min-width: 1024px) and (orientation: portrait){
    img{
        transform: scale(1.3);
        margin: 120px 0px 0px 0;
    }
 }
 @media only screen and (min-width: 1200px){
    img{
        transform: scale(1.3);
        margin: 0 450px 100px 0;
    }
 }
 @media only screen and (orientation: landscape)  and (max-width: 1023px) {
    img{
        display: none;
    }
 }
`;
export const StartWrapper = styled(Wrapper)`
  position: absolute;
  bottom: 0;
  margin: 10px auto;
  @media only screen and (min-width: 768px) and (orientation: portrait) {
    bottom: 5%;
  }
  @media only screen and (min-width: 1024px) {
    right: 10%;
    bottom: 5%;
  }
  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    right: 50%;
    transform: translateX(50%);
  }
  @media only screen and (orientation: landscape) and (max-width: 1023px) {
    bottom: 50%;
    transform: translateY(50%);
  }
`;
