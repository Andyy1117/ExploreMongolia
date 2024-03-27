import React from 'react';
import Accordion from '../components/Accordian';
import { motion } from 'framer-motion';

import HeroImage from '../assets/Hero1.jpg';
import HeroText from '../assets/Text1.svg';
import Promo from '../assets/Promo1.webp';
import Blog from '../assets/Blog1.jpg';
import SampleVideo from '../assets/sample.mp4';

import '../styles/custom.css';



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
        <h1 className="text-transparent bg-clip-text text-5xl mt-8 font-black text-center mb-4 bg-gradient-to-r from-black to-indigo-700">WHERE TO?</h1>
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
      <div className="grid grid-cols-4 gap-4 mt-8 h-96">  {/* Set up a 12-column grid */}
        {/* Large Image (spans 6 columns) */}
        <button className="col-span-2 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition duration-300">
          <div className='flex flex-col items-center justify-between bg-transparent'>
            <p className='text-gray-700 bg-transparent'>This is a travel blog</p> 
          </div>
          <img src={Blog} alt="Large" className="w-full h-full object-cover" /> 
        </button>

        {/* Card Container (spans 6 columns, fixed height) */}
        <div className="col-span-2 flex flex-col gap-4 pb-4 h-96 overflow-hidden">  {/* Fixed height with overflow handling */}

          {/* Read More Box */}
          <button className="bg-white rounded-lg shadow-md h-1/2 p-4 hover:bg-gray-100 transition duration-300">
            <h2 className="text-xl font-bold mb-2">Read More</h2>
            <p className="text-sm">This is the content for the "Read More" box. You can adjust the font size (text-sm) to prevent content overflow.</p>  {/* Consider adjusting font size */}
          </button>

          {/* CTA - Write Your Own Blog */}
          <button className="bg-white rounded-lg shadow-md h-1/2 p-4 hover:bg-gray-100 transition duration-300">
            <h2 className="text-xl font-bold mb-2">Write Your Own Blog</h2>
            <p className="text-sm">This is the content encouraging users to write their own blog.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Write Now</button>
          </button>
        </div>
      </div>

      <motion.div className='p-4 mt-8 bg-gray-200 rounded-2xl'
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Accordion
        title="How do I book?"
        answer="To book accommodations, simply navigate to our website and enter your destination, 
        travel dates, and preferences. Browse through the available options, select the one that suits you best, 
        and proceed with the booking process by providing your details and payment information."
        />
        <Accordion
        title="Are there any special deals or discounts available for booking multiple services together?"
        answer="Yes, we offer special discounts and deals for booking multiple services such as flights, accommodations,
         and activities together. Keep an eye out for our bundled packages and promotions to maximize your savings on your
          travel expenses."
        />
        <Accordion 
        title="What is your cancellation policy for bookings made through your site?" 
        answer="Our cancellation policy varies depending on the type of service and provider. Generally, we offer flexible 
        cancellation options for most bookings, allowing you to cancel or modify your reservation within a specified 
        timeframe without incurring any penalties. Please refer to the terms and conditions of your booking or contact our 
        customer support for specific details." />
      </motion.div>




    </div>
    
  );
};

export default Landing;
