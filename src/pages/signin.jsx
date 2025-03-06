import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here (e.g., API call)
//     console.log('Form submitted:', formData);
//   };

  return (
    <div className="bg-[#ededed] flex justify-center items-center h-[70vh] md:h-screen">
       
    <div className="w-1/2 h-screen hidden lg:block">
      <img src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876024.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
    </div>
    <div className= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST">
        <div className="mb-4 bg-[#ededed]">
          <label for="username" className="block text-gray-600">Username</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
        <div className="mb-4">
          <label for="password" className="block text-gray-800">Password</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" className="text-red-500"/>
          <label for="remember" className="text-green-900 ml-2">Remember Me</label>
        </div>
        <div className="mb-6 text-blue-500">
          <Link href="/" className="hover:underline">Forgot Password?</Link>
        </div>
        <button type="submit" className="bg-red-800 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
      </form>
      <div className="mt-6 text-green-800 text-center">
        <Link href="/Register" className="hover:underline">Register</Link>
      </div>
    </div>
    </div>
  );
}


export default SignIn;