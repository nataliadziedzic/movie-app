import styled from 'styled-components';
import { Container } from '../reuse/Container';
import Span from '../reuse/Span';

export const ResultContainer = styled(Container)`
  justify-content: center;
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    align-items: center;
  }
`;
export const Intro = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-left: -45px;
  max-width: 700px;
  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 39px;
  }
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    grid-row: 1;
    grid-column: 1/3;
    align-self: end;
    text-align: center;
    margin-right: 100px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 45px;
  }
`;
export const Line = styled.div`
  margin: 5px 0 30px 25px;
  width: 200px;
  overflow: visible;
  border-bottom: 1.5px solid rgb(142, 6, 10);
  @media only screen and (min-width: 360px) {
    border-bottom: 3px solid rgb(142, 6, 10);
  }
  @media only screen and (min-width: 768px) {
    margin: 5px 0 40px 25px;
    width: 300px;
    border-bottom: 3.5px solid rgb(142, 6, 10);
  }
  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    width: 370px;
    margin: 5px 0 30px 55px;
  }
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    margin-left: 35%;
  }
  @media only screen and (min-width: 1200px) and (orientation: landscape) {
    width: 370px;
    margin-left: 38%;
  }
  @media only screen and (min-width: 1400px) and (orientation: landscape) {
    margin-left: 40%;
  }
`;

export const Poster = styled.div`
  width: 155px;
  height: 230px;
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
  @media only screen and (min-width: 360px) {
    width: 165px;
    height: 240px;
  }
  @media only screen and (min-width: 768px) {
    width: 280px;
    height: 385px;
  }
  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    width: 300px;
    height: 460px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    grid-row: 2/5;
    grid-column: -1;
    align-self: start;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 11px;
  font-size: 18px;
  text-shadow: 1px 1px rgb(0, 0, 0);
  overflow: visible;
  max-width: 700px;

  @media only screen and (min-width: 360px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 27px;
    margin: 30px;
  }
  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    font-size: 30px;
    margin: 40px 0 25px;
  }
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    grid-row: 2;
    grid-column: 1/3;
    margin: 0;
    margin-right: 100px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 35px;
  }
`;

export const Plot = styled.p`
    text-align: center;
    font-weight: 400;
    height: 15%;
    overflow: auto;
    font-size: 15px;
    max-width: 700px;
    @media only screen and (min-width: 360px){
        height: 20%;
    }
    @media only screen and (min-width: 768px){
        font-size: 22px;
        margin: 0 20px;
    }
    @media only screen and (min-width: 1024px) and (orientation: portrait) {
        margin: 20px 65px;
        height: 10%;
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape) {
        grid-row: 3;
        grid-column: 1/3;
        align-self: start;
        height: auto;
        margin-right: 100px;y
    }
`;
export const SpanResult = styled(Span)`
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    grid-row: 4;
    grid-column: 1/3;
    align-self: center;
    max-width: 700px;
    margin-right: 100px;
  }
`;
