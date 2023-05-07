import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleMovieClick = (movieId) => {
        console.log(`clicked `, movieId); // This line should log the movieId when the movie image is clicked
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
        // Navigate to the details page
    }
    
    

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="movie-card">
                            <h3>{movie.title}</h3>
                            <Link to={`/details/${movie.id}`} onClick={() => handleMovieClick(movie.id)}>
                                <img className="image" src={movie.poster} alt={movie.title} />
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;
