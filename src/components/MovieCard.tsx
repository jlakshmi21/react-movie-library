// src/components/MovieCard.tsx
import React from 'react';

interface MovieCardProps {
  title: string;
  year: string;
  genre: string;
  imageUrl: string;
  onClick: () => void; // New prop for click event
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, genre, imageUrl, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}> {/* Add click event */}
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
