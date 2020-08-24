import React from 'react';
import styled from "styled-components"
import Button from "../reuse/Button";
import H1 from "../reuse/H1";

const ButtonsWrapper = styled.div`
height: 70%;
button{
    margin-top: 35px;
    margin-left: 50%;
    transform: translateX(-50%)
}
`

function Select() {
    return (
        <>
            <H1>Which genre do you choose?</H1>
            <ButtonsWrapper>
                <Button>Horror</Button>
                <Button>Comedy</Button>
                <Button>Romance</Button>
                <Button>Fantasy</Button>
            </ ButtonsWrapper>
        </>
    )
}
export default Select