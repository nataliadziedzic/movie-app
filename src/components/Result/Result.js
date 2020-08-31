import React from 'react';
import { StyledLinkResult } from "./Result-style";
import { useSelector } from "react-redux";
import { Plot, Title, Poster, Intro, Line, ResultContainer } from "./Result-style";
import { SmallButton } from "../reuse/Button";
import Media from "react-media";
import Warning from "../ScreenWarning/Warning";


function Result() {
    const state = useSelector(state => state.movieReducer)
    return (
        <Media query="( orientation: landscape ) and ( max-width: 1023px )"    >
            {matches => (
                matches ? <Warning /> :
                    <ResultContainer>
                        <Intro>Your movie is:<Line /></Intro>
                        <Poster> <img src={state.img} alt="Movie poster" /> </Poster>
                        <Title>{state.title}</Title>
                        <Plot>{state.plot}</Plot>
                        <StyledLinkResult to="/movie-app/customize"><SmallButton>Back</SmallButton></StyledLinkResult>
                    </ResultContainer>
            )}
        </ Media>
    )
}
export default Result