import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
    const movieDetails = useSelector(store => store.movieDetails);
    const genresDetails = useSelector(store => store.genresDetails);
   

    const goBack = () => {
      window.history.back();
  };
  
    
    return (
        <main>
            <h1>About</h1>
            <button className="back-button" onClick={goBack}>Back</button>
            <section className="movie-details">
                <div className="movie-details-card">
                    <h3>{movieDetails.title}</h3>
                    <img className="image" src={movieDetails.poster} alt={movieDetails.title} />
                    <p>{movieDetails.description}</p>
                    <h3>Genres</h3>
                    <ul className="genres-list">
                        {genresDetails.map(genre => (
                            <h4 key={genre.id}>{genre.name}</h4>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default MovieDetails;
