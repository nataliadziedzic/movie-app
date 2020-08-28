import React from 'react';
import { StyledLink } from "../reuse/Button";
import Button from "../reuse/Button";
import H1 from "../reuse/H1";
import { ButtonsWrapper, SelectPage } from "./Select-style";
import Media from "react-media";
import Warning from "../ScreenWarning/Warning";
import Loading from '../Loading/Loading';

import searching from "../../assets/img/searching.png"

function Select() {
    return (
        <Media query="( orientation: landscape ) and ( max-width: 1023px )"    >
            {matches => (
                matches ? <Warning /> :
                    <SelectPage>
                        <H1>Which genre do you choose?</H1>
                        <ButtonsWrapper>
                            <StyledLink to="/movie-app/"><Button>Horror</Button></StyledLink>
                            <StyledLink to="/movie-app/"><Button>Comedy</Button></StyledLink>
                            <StyledLink to="/movie-app/"><Button>Romance</Button></StyledLink>
                            <StyledLink to="/movie-app/"><Button>Fantasy</Button></StyledLink>
                        </ ButtonsWrapper>
                    </SelectPage>
            )}
        </ Media>
    )
}
export default Select