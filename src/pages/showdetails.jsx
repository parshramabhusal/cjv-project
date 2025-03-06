import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Showdetails = () => {
  const { id } = useParams(); 
  const [shows, setShows] = useState(null);

  // Fetch movie details from the API
  useEffect(() => {
    fetch(`https://cjv-project-api.onrender.com/tvShows/${Number(id)}`)
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
          src={shows.posterUrl}
          alt={shows.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{shows.plot}</p>
          <p className="text-gray-600"><strong>Year:</strong> {shows.year}</p>
          <p className="text-gray-600"><strong>Genre:</strong> {shows.genres.join(', ')}</p>
          <p className="text-gray-600"><strong>Actors:</strong> {shows.actors}</p>
          <p className="text-gray-600"><strong>Runtime:</strong> {shows.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Showdetails;