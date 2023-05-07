// MovieDetails.js
import React from 'react';
import './MovieDetails.css';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.movieDetails);
  const movieGenres = useSelector((state) => state.movieGenres);
  return (
  <>
  <div></div>
  </>
  );
};

export default MovieDetails;
