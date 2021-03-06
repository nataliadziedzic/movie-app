import React from 'react';
import Button, { StyledLink } from '../reuse/Button';
import tele from '../../assets/img/main-picture2.png';
import { StartPage, StartWrapper } from './Start-style';

import H1 from '../reuse/H1';
import Span from '../reuse/Span';

const Start = () => (
  <StartPage>
    <img src={tele} alt="TV" />
    <StartWrapper>
      <H1 start>Choose a movie!</H1>
      <Span>
        <StyledLink to="/customize">
          <Button start>START</Button>
        </StyledLink>
      </Span>
    </StartWrapper>
  </StartPage>
);

export default Start;
