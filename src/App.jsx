import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";
import Movies from "./pages/movies";
import MovieDetails from "./pages/moviedetails";
import Showdetails from "./pages/showdetails";
import TVShows from "./pages/shows";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import HeroSection from "./components/HeroSection";
 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<TVShows />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/shows/:id" element={<Showdetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
};
 
export default App;
 
 