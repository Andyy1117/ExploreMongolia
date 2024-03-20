import React from 'react';
import HeroImage from '../assets/Hero1.jpg';
import HeroText from '../assets/Text1.svg';
import '../styles/custom.css';

const Landing = () => {
  return (
    <div className="landing flex flex-col items-center min-h-screen">
      <h1 className="text-transparent bg-clip-text text-5xl text-center mb-8 bg-gradient-to-r from-black to-blue-800">WHERE TO?</h1>
      <input
        type="text"
        placeholder="Search for your destination"
        className="search-bar w-1/2 p-2 border rounded-md shadow-sm mb-4"
      />
      <div className="hero-container overflow-hidden relative mx-8">
        <img
          src={HeroImage} 
          alt = "Hero"
          className="hero-image w-full h-full object-cover rounded-2xl mt-4" // Rounded bottom corners
        />
        <div className="text-overlay">
          <div style={{ marginTop: '-100px' }}> 
            <img src={HeroText} alt="text.svg" style={{ width: '500px' }} />
            {/* Text */} 
            <p className="w-[834px] mt-4 font-light text-[#f1f1f1] text-[20px] tracking-[0.44px] leading-[normal]">
                    We offer tailored solutions, providing you with exactly what you need while acting 
                    <br/> as your personal travel consultant for exploring Mongolia's unique and 
                    <br/> extraordinary destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Landing;
