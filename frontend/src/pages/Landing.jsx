import React from 'react';
import HeroImage from '../assets/Hero1.jpg';
import HeroText from '../assets/Text1.svg';
import SampleVideo from '../assets/sample.mp4';
import '../styles/custom.css';
import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05
    }
  }
}


const Landing = () => {
  return (
    <div className="landing flex flex-col items-center min-h-screen px-8">

      {/* Header and search bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: {opacity: 1, x: 0,}
        }}>
        <h1 className="text-transparent bg-clip-text text-5xl font-black text-center mb-8 bg-gradient-to-r from-black to-indigo-700">WHERE TO?</h1>
      </motion.div>
      {/* Search bar */}
      <div className='flex w-full items-center justify-center mb-4 mt-4'>
        <input
          type="text"
          placeholder="Search for your destination"
          className="search-bar w-4/5 py-2 border rounded-md shadow-sm mr-4"
        />
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
            Search
        </button>
      </div>

      {/* Hero section */}
      <motion.div className="hero-container overflow-hidden relative"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        >
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
          <div className='flex mt-4'>
            <button className="bg-black hover:bg-gray-500 text-white text-sm font-bold  py-2 px-4 rounded mr-4 w-52">Book</button>
            <button className="bg-white hover:bg-gray-500 text-black text-sm font-bold py-2 px-4 rounded w-56">Explore</button>
          </div>
        </div>
      </motion.div>

      {/* Promotional video section */}
      <motion.div className="video-container mt-8 w-full"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Watch Our Promotional Video</h2>
        <video controls className="w-full h-full rounded-2xl"
          src={SampleVideo}
          autoPlay
          loop
          muted
          >
        </video>
      </motion.div>

      {/* Newsletter subscription */}
      <motion.div className="newsletter-container w-full relative mt-8 py-4 bg-black flex rounded-2xl"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="newsletter-text-container w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Join our newsletter</h2>
          <p className="text-sm text-white">Sign up for weekly content and be the first to know about our special offers and promotions.</p>
        </div>
        <div className="newsletter-input-container w-1/2 p-8 ml-2 flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input w-full p-2 border rounded-md shadow-sm mr-2"
          />
          <button className="newsletter-btn bg-indigo-700 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </motion.div>


    </div>
    
  );
};

export default Landing;
