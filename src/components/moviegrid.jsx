import React from 'react';
import { Link } from 'react-router-dom';

const MovieGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map(movie => (
        <Link to={`/media/${movie.id}`} key={movie.id}>
          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <img src={movie.imageURL} alt={movie.title} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieGrid;