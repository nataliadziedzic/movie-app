import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import searching from '../../assets/img/searching.png';
import H1 from '../reuse/H1';
import { Container } from '../reuse/Container';
import { loading } from '../../redux/actions';

const Loading = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingReducer);

  // Logic for displaying a loadnig page for only 2 seconds
  const handleRedirect = () => {
    dispatch(loading());
  };
  setTimeout(handleRedirect, 2000);

  return (
    <Container style={{ justifyContent: 'center' }}>
      <H1>Selecting a movie for you...</H1>
      <img src={searching} alt="computer" />
      {!loadingState && <Redirect to="/result" />}
    </Container>
  );
};
export default Loading;
