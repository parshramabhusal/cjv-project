import React, { useEffect, useState } from 'react';
import TVShowsGrid from '../components/tvshowsgrid';

const Shows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('https://movies-latest-ao07.onrender.com/media/tvshows')
      .then(response => response.json())
      .then(data => setTVShows(data), 0);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TV Shows</h1>
      <TVShowsGrid tvShows={tvShows} />
    </div>
  );
};

export default Shows;