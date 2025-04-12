import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HollywoodSpotlight from '../components/HolleywoodSpotlight';

const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [featuredTVShows, setFeaturedTVShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  useEffect(() => {
    fetch('https://movies-latest-ao07.onrender.com/media/movies?featuredType=true')
      .then((res) => res.json())
      .then((data) => setFeaturedMovies(data))
      .catch((err) => console.error('Error fetching movies:', err));

    fetch('https://movies-latest-ao07.onrender.com/media/tvshows?featuredType=true')
      .then((res) => res.json())
      .then((data) => setFeaturedTVShows(data))
      .catch((err) => console.error('Error fetching tv shows:', err));
  }, []);

  const handleSearch = async () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch('https://movies-latest-ao07.onrender.com/media/movies'),
        fetch('https://movies-latest-ao07.onrender.com/media/tvshows'),
      ]);
      const movieData = await movieRes.json();
      const tvData = await tvRes.json();

      const allResults = [...movieData, ...tvData];

      const filtered = allResults.filter(item =>
        item.title.toLowerCase().includes(query)
      );

      setSearchResults(filtered);
      setSearchTriggered(true);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const highlightMatch = (title) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlighted = title.replace(regex, (match) => `<mark class="bg-yellow-300 rounded">${match}</mark>`);
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setSearchTerm('');
            setSearchResults([]);
            setSearchTriggered(false);
          }}
        >
          <h1 className="text-2xl font-bold cursor-pointer">Find Your Movies / Shows</h1>
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search by title..."
            className="rounded px-4 py-2 text-black w-64"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Search
          </button>
        </div>
      </header>

      {searchTriggered && (
        <section className="container mx-auto p-4">
          <h2 className="text-xl font-bold mb-2">Search Results</h2>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {searchResults.map(item => (
                <Link to={`/media/${item.id}`} key={item.id}>
                  <div className="bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300">
                    <img
                      src={item.imageURL}
                      alt={item.title}
                      className="w-full h-44 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{highlightMatch(item.title)}</h3>
                      <p className="text-sm text-gray-400">{item.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-2">
              No results found for "{searchTerm}"
            </p>
          )}
        </section>
      )}

      <HeroSection />

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
            <Link to={`/media/${movie.id}`} key={movie.id}>
              <div className="bg-gray-800 h-full rounded-lg text-white hover:bg-gray-700 transition duration-300">
                <img
                  src={movie.imageURL}
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
            <Link to={`/media/${tvShow.id}`} key={tvShow.id}>
              <div className="bg-gray-800 h-full rounded-lg text-white hover:bg-gray-700 transition duration-300">
                <img
                  src={tvShow.imageURL}
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

      <HollywoodSpotlight />
    </div>
  );
};

export default HomePage;
