import React from 'react';
import Logo from '../assets/ExploreMongolia.svg';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50'>
        <nav className='flex justify-between items-center h-20 px-4' >
        <img
            src = { Logo }
            alt = 'ExploreMongolia.svg'
            width={160}
            height={40}
        />
        <ul className='flex'>
            <li>Tours</li>
            <li>Blogs</li>
            <li>About us</li>
            <li>Contact</li>
            <li>
                <button className='bg-black text-white px-4 py-2 rounded full'>
                    Register
                </button>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Navbar
