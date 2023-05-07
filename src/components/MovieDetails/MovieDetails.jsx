import React from 'react';
import { useSelector } from 'react-redux';
import './MovieDetails.css';

function MovieDetails() {
    const movieDetails = useSelector(store => store.movieDetails);
    const genresDetails = useSelector(store => store.genresDetails);

    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movie-details">
                <div className="movie-details-card">
                    <h3>{movieDetails.title}</h3>
                    <img className="image" src={movieDetails.poster} alt={movieDetails.title} />
                    <p>{movieDetails.description}</p>
                    <ul className="genres-list">
                        {genresDetails.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default MovieDetails;
