import React, { useEffect, useState } from 'react';
import MovieGrid from '../components/moviegrid';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://movies-latest-ao07.onrender.com/media/movies')
      .then(response => response.json())
      .then(data => setMovies(data), 0);
  }, []);
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Movies;