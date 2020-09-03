import React from 'react';
import { StyledLink } from "../reuse/Button"
import { useSelector } from "react-redux";
import { Plot, Title, Poster, Intro, Line, ResultContainer } from "./Result-style";
import { SmallButton } from "../reuse/Button";
import Media from "react-media";
import Warning from "../ScreenWarning/Warning";
import { SpanResult } from "./Result-style"

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
                        <SpanResult><StyledLink to="/movie-app/customize"><SmallButton>Back</SmallButton></StyledLink></SpanResult>
                    </ResultContainer>
            )}
        </ Media>
    )
}
export default Result