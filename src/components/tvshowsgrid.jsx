import React from 'react';
import { Link } from 'react-router-dom';

const TVShowsGrid = ({ tvShows }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tvShows.map(tvShow => (
        <Link to={`/media/${tvShow.id}`} key={tvShow.id}>
          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <img src={tvShow.imageURL} alt={tvShow.title} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="mt-2 text-lg font-semibold">{tvShow.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TVShowsGrid;