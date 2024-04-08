import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from "../assets/logo.svg";
import Sign from "../assets/sign.jpeg";

const SigninPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', userData);
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error, e.g., show error message to the user
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <Link to='/' className='absolute top-0 left-4 mt-4 text-blue-500 block'>
            Back
          </Link>
          <img src={Logo} alt="Logo.svg" style={{ width: '300px', opacity: 1 }} className='mx-auto mb-8'/>
          
          {/* Your sign-in form */}
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              className="w-full p-2 mb-2 border rounded-md"
              type="text"
              placeholder="Email Address"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              id="password"
              name="password"
              className="w-full p-2 mb-4 border rounded-md"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
              Sign In
            </button>
          </form>

          {/* Bottom part */}
          <p className='mt-4'>
            Need an account?{' '}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={Sign} 
          alt="sign.jpeg"
        />
      </div>
    </div>
  );
};

export default SigninPage;