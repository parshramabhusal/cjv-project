import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";
import Movies from "./pages/movies";
import MovieDetails from "./pages/moviedetails";
import TVShows from "./pages/shows";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import UserProfile from "./pages/UserProfile"

 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<TVShows />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/media/:id" element={<MovieDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <Footer/>
    </Router>
  );
};
 
export default App;
 
 