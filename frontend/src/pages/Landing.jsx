import React from 'react';
import HeroImage from '../assets/Hero1.jpg';
import HeroText from '../assets/Text1.svg';
import Promo from '../assets/Promo1.webp';
import Blog from '../assets/Blog1.jpg';
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
      delay: 0.05,
      duration: 1
    }
  }
}


const Landing = () => {
  return (
    <div className="landing flex flex-col items-center min-h-screen px-8 pb-32">

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
        <h2 className="text-2xl font-bold mb-4">Watch Our Promotional Video</h2>
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

      {/* Sign up promotion section */}
      <motion.div className="signup-promo-container relative w-full h-96 mt-8 overflow-hidden flex"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {/* Background image */}
        <img src={Promo} alt="Promo Background" className="w-1/2 h-full object-cover rounded-2xl" />

        {/* Content */}
        <div className="signup-promo-content flex flex-col justify-center items-center w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Create Unforgettable Memories</h2>
          <h2 className="text-3xl font-bold mb-4 text-black">Book now!</h2>
          <p className="text-lg text-gray-900 mb-4 text-center">Experience the thrill of exploring new cultures, indulging in delicious cuisines, and creating unforgettable memories. 
                                                                  Our platform offers a wide range of destinations, activities, and accommodations to cater to every traveler's needs. Start planning your next adventure today!</p>
          <form className="flex flex-col items-center">
            <input type="email" placeholder="Enter your email" className="signup-input mb-4 p-2 border rounded-md shadow-sm" />
            <button type="submit" className="signup-btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
          </form>
        </div>
      </motion.div>

      {/* Blog section */}
      <div className="blog-section-container flex flex-row items-start justify-between mt-8">
      {/* Left big container */}
        <motion.div className="big-container relative flex-1/2 w-1/2 h-96 mr-4"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          {/* Background image */}
          <div className="big-container-image h-1/2 overflow-hidden rounded-t-lg">
            <img src={Blog} alt="Background" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="big-container-content p-8 bg-gray-300 rounded-b-lg overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4 text-black">Discover the Untamed Beauty of Mongolia</h2>
            <p className="text-lg text-gray-900 mb-4 text-center">Embark on an unforgettable journey through the untamed landscapes of Mongolia. From vast steppes to rugged mountains, immerse yourself in the rich cultural tapestry of this fascinating country. Experience the nomadic way of life, encounter diverse wildlife, and marvel at the ancient traditions that have shaped this land for centuries.</p>
            {/* Add your form or any other content here */}
          </div>
        </motion.div>

        {/* Right small containers */}
        <motion.div className="flex-col justify-between">
          <div className="small-container mb-4"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {/* Content for the first small container */}
            <div className="p-4 bg-gray-200 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Small Container 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div className="small-container"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {/* Content for the second small container */}
            <div className="p-4 bg-gray-200 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Small Container 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    
  );
};

export default Landing;
