import React from 'react';
import { MovieProvider } from './context/MovieContext'; // Ensure you are importing the MovieProvider
import DarkModeToggle from './components/DarkModeToggle';
import MovieList from './components/MovieList';

const App: React.FC = () => {
  return (
    <MovieProvider>  {/* Wrap your app with MovieProvider */}
      <div className="app">
        
        <DarkModeToggle />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
