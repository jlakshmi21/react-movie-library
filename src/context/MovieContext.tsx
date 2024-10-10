// src/context/MovieContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Movie {
  title: string;
  year: string;
  genre: string;
  imageUrl: string;
}

interface MovieContextType {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([
    { title: 'Avengers', year: '2010', genre: 'Action', imageUrl: '../../images/avengers.jpg' },
    { title: 'Stranger Things', year: '2008', genre: 'Action', imageUrl: '../../images/stranger things.jpg' },
    { title: 'Twilight', year: '2014', genre: 'Action', imageUrl: '../../images/twilight.jpg' },
    { title: 'Avengers', year: '2010', genre: 'Action', imageUrl: '../../images/avengers.jpg' },
    { title: 'Stranger Things', year: '2008', genre: 'Action', imageUrl: '../../images/stranger things.jpg' },
    { title: 'Twilight', year: '2014', genre: 'Action', imageUrl: '../../images/twilight.jpg' },
    { title: 'Avengers', year: '2010', genre: 'Action', imageUrl: '../../images/avengers.jpg' },
    { title: 'Stranger Things', year: '2008', genre: 'Action', imageUrl: '../../images/stranger things.jpg' },
    { title: 'Twilight', year: '2014', genre: 'Action', imageUrl: '../../images/twilight.jpg' },
    { title: 'Twilight', year: '2014', genre: 'Action', imageUrl: '../../images/twilight.jpg' },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, darkMode, toggleDarkMode }}>
      {children}
    </MovieContext.Provider>
  );
};
