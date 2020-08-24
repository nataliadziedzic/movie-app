import React from 'react';
import tele from "../../assets/img/main-picture2.png"
import { StartPage, Wrapper } from "./Start-style"
import Button from "../reuse/Button"
import H1 from "../reuse/H1"


function Start() {
    return (
        <StartPage>
            <img src={tele} alt="TV" />
            <Wrapper>
                <H1>Choose a movie!</H1>
                <Button>START</Button>
            </Wrapper>
        </StartPage>
    )
}

export default Start