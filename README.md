# React Movie Library

This is a modern movie library web application built using the latest React concepts, including functional components, hooks, and context. The project also supports a dynamic dark mode feature and is fully responsive.

## Features

- **Movie Search:** Search for movies by their title.
- **Movie Details:** View detailed information about each movie.
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Works on all screen sizes, including mobile devices.

## Technologies Used

- **React**: The app is built using functional components, and React hooks like `useState`, `useEffect`, and `useContext`.
- **Context API**: Used for global state management (e.g., for managing movie data and theme).
- **Custom Hooks**: Utilizes a custom hook (`useMovieContext`) to easily access global state.
- **TypeScript**: Strong typing for component props and state ensures the app is robust and error-free.
- **CSS Styling**: Modular CSS styles for both light and dark mode.
- **ngrok Integration**: Option to expose the local development server for external access.

## React Concepts Implemented

- **Functional Components**: All components in the app are built using functional components for a simpler, more readable structure.
- **React Hooks**:
  - `useState` to manage the app's local state.
  - `useEffect` to handle side effects, such as fetching movie data or syncing the dark mode.
  - `useContext` to provide and consume the global state throughout the app.
- **Context API**: For managing global states like movies and theme preference.
- **Conditional Rendering**: Elements are conditionally rendered based on the app's state (for example, light/dark mode and movie details).
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)
- **ngrok** (optional, for exposing your local server online)

### Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/react-movie-library.git
   cd react-movie-library
