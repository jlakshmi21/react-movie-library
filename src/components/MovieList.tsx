// src/components/MovieList.tsx
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { useMovieContext } from '../context/MovieContext';
import { Movie } from '../context/MovieContext'; // Import Movie type
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';

const MovieList: React.FC = () => {
  const { movies, darkMode } = useMovieContext();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (query: string) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={`movie-list ${darkMode ? 'dark' : ''}`}>
        <h1>Movie Library</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} darkMode={darkMode} />
    ) : (
        <div className="movies">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <MovieCard
                key={index}
                {...movie}
                onClick={() => handleMovieClick(movie)} // Pass click handler to MovieCard
              />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;
