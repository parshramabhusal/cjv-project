import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Showdetails = () => {
  const { id } = useParams(); 
  const [shows, setShows] = useState(null);

  // Fetch movie details from the API
  useEffect(() => {
    fetch(`https://movies-latest-ao07.onrender.com/media/${id}`)
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching show details:', error));
  }, [id]);

  if (!shows) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-100">
      <h1 className="text-3xl font-bold mb-4">{shows.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={shows.imageURL}
          alt={shows.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{shows.plot}</p>
          <p className="text-gray-600"><strong>Title:</strong> {movie.title}</p>
          <p className="text-gray-600"><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p className="text-gray-600"><strong>Years:</strong> {movie.year}</p>
          <p className="text-gray-600"><strong>Runtime:</strong> {movie.duration} </p>
          <p className="text-gray-600"><strong>Description:</strong> {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Showdetails;