import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const [clickedMovieId, setClickedMovieId] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleCardClick = (movieId) => {
    setClickedMovieId(movieId === clickedMovieId ? null : movieId);
  };

  const clickedMovie = movies.find(movie => movie.id === clickedMovieId);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => (
          <Card key={movie.id} onClick={() => handleCardClick(movie.id)}
           className={movie.id === clickedMovieId ? "card-selected" : "card"}>

            <Card.Img variant="top" src={movie.poster} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </section>
      {clickedMovie && <MovieDetails movie={clickedMovie} />}
    </main>
  );
}

export default MovieList;
