import React from 'react';
import { StyledLink } from "../reuse/Button";
import { useSelector } from "react-redux";
import { Plot, Title, Poster, Intro, Line, ResultContainer } from "./Result-style";
import { SmallButton } from "../reuse/Button";


function Result() {
    const state = useSelector(state => state.movieReducer)
    return (
        <ResultContainer>
            <Intro>Your movie is:<Line /></Intro>
            <Poster> <img src={state.img} alt="Movie poster" /> </Poster>
            <Title>{state.title}</Title>
            <Plot>{state.plot}</Plot>
            <StyledLink to="/movie-app/customize"><SmallButton>Back</SmallButton></StyledLink>
        </ResultContainer>
    )
}
export default Result