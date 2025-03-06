import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your registration logic here (e.g., API call)
  //   console.log('Form submitted:', formData);
  // };

  return (
    <div className="bg-[#ededed] flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img 
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876024.jpg" 
          alt="Placeholder Image" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form action="#" method="POST">
          <div className="mb-4 bg-[#ededed]">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-800">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
            />
          </div>
          <button type="submit" className="bg-red-800 text-white font-semibold rounded-md py-2 px-4 w-full">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-green-800 text-center">
          <p>Already have an account? <Link href="/sigin" className="hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;