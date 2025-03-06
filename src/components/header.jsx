import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <Link to="/" className="text-2xl font-bold">Flick Feast</Link>
          <p className="text-sm text-white/60">Feast your eyes on the best flicks</p>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/movies" className="hover:text-gray-400">Movies</Link></li>
            <li><Link to="/shows" className="hover:text-gray-400">TV Shows</Link></li>
            <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
            <li><Link to="/signin" className="hover:text-gray-400">Sign In</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;