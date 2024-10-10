// src/components/DarkModeToggle.tsx
import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useMovieContext();

  return (
    <button onClick={toggleDarkMode} className={`dark-mode-toggle ${darkMode ? 'dark-mode-text' : ''}`}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
    </button>
  );
};

export default DarkModeToggle;
