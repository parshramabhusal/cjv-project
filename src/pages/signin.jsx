import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const response = await fetch(
        "https://movies-latest-ao07.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Response data:", data);

      if (!response.ok || !data) {
        throw new Error(data.message || "Login failed");
      }

      if (data.message && data.message.includes("Welcome back!")) {
        const userToStore = {
          email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,   
        };

        localStorage.setItem("user", JSON.stringify(userToStore));

        navigate("/userprofile");
      } else {
        throw new Error("Unexpected response: " + data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="bg-[#ededed] flex justify-center items-center h-[70vh] md:h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876024.jpg"
          alt="Movie Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-[#ededed]">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
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
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
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
          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {errorMessage}
            </div>
          )}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-red-500"
            />
            <label htmlFor="remember" className="text-green-900 ml-2">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-blue-500">
            <Link to="/" className="hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-red-800 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-green-800 text-center">
          <Link to="/Register" className="hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
