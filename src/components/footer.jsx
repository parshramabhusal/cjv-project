import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="bg-gray-800 dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flick Feast</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to ="/" className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link to ="/movies" className="hover:underline me-4 md:me-6">Movies</Link>
                        </li>
                        <li>
                            <Link to ="/shows" className="hover:underline me-4 md:me-6">Shows</Link>
                        </li>
                        <li>
                            <Link to ="/signIn" className="hover:underline me-4 md:me-6">Sign In</Link>
                        </li>
                        <li>
                            <Link to ="/register" className="hover:underline">Register</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-white">© {new Date().getFullYear()} <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;