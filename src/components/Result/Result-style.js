import styled from "styled-components";
import { Container } from "../reuse/Container";

export const ResultContainer = styled(Container)`
justify-content: center;
`
export const Intro = styled.h2`
font-size: 24px;
font-weight: 400;
margin-left: -45px;
`
export const Line = styled.div`
margin: 5px 0 5px 25px;
width: 200px;
overflow: visible;
border-bottom: 1.5px solid rgb(142, 6, 10);
@media only screen and (min-width: 360px){
    border-bottom: 3px solid rgb(142, 6, 10);
}
`

export const Poster = styled.div`
    margin-top: -65px;
    text-align: center;
    transform: scale(0.6);
`

export const Title = styled.h2`
    text-align: center;
    margin: -65px 0 15px 0;
    font-size: 24px;
    text-shadow: 1px 1px rgb(0,0,0)
`

export const Plot = styled.p`
    text-align: center;
    font-weight: 400;
    height: 15%;
    overflow: auto;
    font-size: 15px;
    margin-bottom: 10px;
`