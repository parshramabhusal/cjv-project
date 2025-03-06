import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState();

  // Fetch movie details from the API
  useEffect(() => {
    fetch(`https://cjv-project-api.onrender.com/movies/${Number(id)}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  console.log(movie);
  if (!movie) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-100">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{movie.plot}</p>
          <p className="text-gray-600"><strong>Year:</strong> {movie.year}</p>
          <p className="text-gray-600"><strong>Genre:</strong> {movie.genres.join(', ')}</p>
          <p className="text-gray-600"><strong>Actors:</strong> {movie.actors}</p>
          <p className="text-gray-600"><strong>Runtime:</strong> {movie.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;