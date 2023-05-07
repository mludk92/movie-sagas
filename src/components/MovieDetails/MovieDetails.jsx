// MovieDetails.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  return (
    <Card className="movie-details">
      <Card.Img variant="top" src={movie.poster} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
