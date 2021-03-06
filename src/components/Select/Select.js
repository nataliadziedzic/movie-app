import React from 'react';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/actions';
import movies from '../../assets/data/moviesId.json';
import Button, { StyledLink } from '../reuse/Button';
import H1 from '../reuse/H1';
import Span from '../reuse/Span';
import { ButtonsWrapper, SelectPage } from './Select-style';
import Warning from '../ScreenWarning/Warning';

const Select = () => {
  const dispatch = useDispatch();
  let movieDetails;
  const KEY = process.env.REACT_APP_API_KEY;
  // Logic for fetching the movie data
  const handleGetMovie = (movieId) => {
    fetch(`https://www.omdbapi.com/?i=tt${movieId}&apikey=${KEY}`)
      .then((response) => {
        console.log(response.status, response.Title);
        if (response.status !== 200) {
          throw Error('Something went wrong.');
        } else return response.json();
      })
      .then((json) => {
        const title = json.Title;
        const plot = json.Plot;
        const poster = json.Poster;
        movieDetails = { title, plot, poster };
        return movieDetails;
      })
      .then((movieDetails) =>
        dispatch(
          selectMovie(
            movieDetails.poster,
            movieDetails.title,
            movieDetails.plot
          )
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };
  // Logic for selecting a movie based on choosen genre
  const handleMovieGenre = (e) => {
    const genre = e.target.textContent.toLowerCase();
    const movieIndex = Math.floor(Math.random() * movies[0][genre].length);
    const movie = movies[0][genre][movieIndex];
    handleGetMovie(movie);
  };
  return (
    <Media query="( orientation: landscape ) and ( max-width: 1023px )">
      {(matches) =>
        matches ? (
          <Warning />
        ) : (
          <SelectPage>
            <H1>Which genre do you choose?</H1>
            <ButtonsWrapper>
              <Span>
                <StyledLink to="/loading">
                  <Button onClick={handleMovieGenre}>Horror</Button>
                </StyledLink>
              </Span>
              <Span>
                <StyledLink to="/loading">
                  <Button onClick={handleMovieGenre}>Comedy</Button>
                </StyledLink>
              </Span>
              <Span>
                <StyledLink to="/loading">
                  <Button onClick={handleMovieGenre}>Romance</Button>
                </StyledLink>
              </Span>
              <Span>
                <StyledLink to="/loading">
                  <Button onClick={handleMovieGenre}>Fantasy</Button>
                </StyledLink>
              </Span>
            </ButtonsWrapper>
          </SelectPage>
        )
      }
    </Media>
  );
};
export default Select;
