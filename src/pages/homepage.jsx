import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HollywoodSpotlight from '../components/HolleywoodSpotlight'; 

const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [featuredTVShows, setFeaturedTVShows] = useState([]);

  // Fetch featured movies and TV shows from the API
  useEffect(() => {
    // Fetch featured movies
    fetch('https://cjv-project-api.onrender.com/movies?featured=true')
      .then((response) => response.json())
      .then((data) => setFeaturedMovies(data))
      .catch((error) => console.error('Error fetching featured movies:', error));

    // Fetch featured TV shows
    fetch('https://cjv-project-api.onrender.com/tvShows?featured=true')
      .then((response) => response.json())
      .then((data) => setFeaturedTVShows(data))
      .catch((error) => console.error('Error fetching featured TV shows:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Movies Section */}
      <section className="container mx-auto p-4 my-10">
        <div className="mb-4 flex flex-col md:flex-row w-full items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Movies</h2>
          <Link
            className="text-gray-800 font-semibold border-2 uppercase border-gray-800 px-4 py-2"
            to="/movies"
          >
            View Details
          </Link>
        </div>
        <div className="p-2 grid grid-cols-2 lg:grid-cols-6 gap-2">
          {featuredMovies.slice(0, 6).map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <div className="bg-gray-800 h-full rounded-lg text-white hover:bg-gray-700 transition duration-300">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured TV Shows Section */}
      <section className="container mx-auto p-4 mb-10">
        <div className="mb-4 flex flex-col md:flex-row w-full items-center justify-between">
          <h2 className="text-2xl font-bold">Featured TV Shows</h2>
          <Link
            className="text-gray-800 font-semibold border-2 uppercase border-gray-800 px-4 py-2"
            to="/shows"
          >
            View Details
          </Link>
        </div>
        <div className="p-2 grid grid-cols-2 lg:grid-cols-6 gap-2">
          {featuredTVShows.slice(0, 6).map((tvShow) => (
            <Link to={`/shows/${tvShow.id}`} key={tvShow.id}>
              <div className="bg-gray-800 h-full rounded-lg text-white hover:bg-gray-700 transition duration-300">
                <img
                  src={tvShow.posterUrl}
                  alt={tvShow.title}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h3 className="mt-2 text-lg font-semibold">{tvShow.title}</h3>
                  <p className="text-sm text-gray-400">{tvShow.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hollywood Spotlight Section */}
      <HollywoodSpotlight />
    </div>
  );
};

export default HomePage;