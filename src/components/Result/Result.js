/* eslint-disable no-shadow */
import React from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import { Redirect } from 'react-router-dom';
import { StyledLink, SmallButton } from '../reuse/Button';
import {
  Plot,
  Title,
  Poster,
  Intro,
  Line,
  ResultContainer,
  SpanResult,
} from './Result-style';

import Warning from '../ScreenWarning/Warning';

const Result = () => {
  const state = useSelector((state) => state.movieReducer);
  let success = true;
  if (state === '' || state.title === undefined) {
    alert('Something went wrong. Try again.');
    success = false;
  }

  return (
    <Media query="( orientation: landscape ) and ( max-width: 1023px )">
      {(matches) =>
        matches ? (
          <Warning />
        ) : (
          <ResultContainer>
            <Intro>
              Your movie is:
              <Line />
            </Intro>
            <Poster>
              {' '}
              <img src={state.img} alt="Movie poster" />{' '}
            </Poster>
            <Title>{state.title}</Title>
            <Plot>{state.plot}</Plot>
            <SpanResult>
              <StyledLink to="/customize">
                <SmallButton>Back</SmallButton>
              </StyledLink>
            </SpanResult>
            {!success && <Redirect to="/customize" />}
          </ResultContainer>
        )
      }
    </Media>
  );
};
export default Result;
