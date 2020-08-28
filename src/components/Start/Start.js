import React from 'react';
import { StyledLink } from "../reuse/Button";
import tele from "../../assets/img/main-picture2.png";
import { StartPage, StartWrapper } from "./Start-style";
import Button from "../reuse/Button";
import H1 from "../reuse/H1";


function Start() {
    return (
        <StartPage>
            <img src={tele} alt="TV" />
            <StartWrapper>
                <H1 start>Choose a movie!</H1>
                <StyledLink to='/movie-app/customize'><Button start>START</Button></StyledLink>
            </StartWrapper>
        </StartPage>
    )
}

export default Start