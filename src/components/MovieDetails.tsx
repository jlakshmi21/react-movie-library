import React from 'react';
import { Movie } from '../context/MovieContext'; // Import Movie type from context for TypeScript type safety

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void; // Callback to close the details view
  darkMode: boolean;  // Add darkMode prop to manage dark mode styles
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose, darkMode }) => {
  return (
    <div className={`movie-details ${darkMode ? 'dark' : ''}`}>
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{movie.title} ({movie.year})</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <img src={movie.imageUrl} alt={movie.title} />
      <p><strong>Description:</strong> This is where a movie description or more details can go.</p>
    </div>
  );
};

export default MovieDetails;
