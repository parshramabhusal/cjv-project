import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Sending data to backend for registration
      const response = await fetch("https://movies-latest-ao07.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Redirect to login page after successful registration
      navigate("/signin");
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-[#ededed] flex justify-center items-center h-[80vh] md:h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img 
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876024.jpg" 
          alt="Movie Background" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4 bg-[#ededed]">
            <label htmlFor="firstName" className="block text-gray-600">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-800">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              required
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="bg-red-800 text-white font-semibold rounded-md py-2 px-4 w-full">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-green-800 text-center">
          <p>Already have an account? <Link to="/signin" className="hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
