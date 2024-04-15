import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ExploreMongolia.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({onNavbarClick}) => {
  const [showMenu, setShowMenu] = useState(false);  // State for menu visibility
  const [logo, showLogo] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(true)


  const [nav, setNav] = useState(false)
  const handleClick = ( page ) => {
    setNav(false);
    onNavbarClick( page );
  };

  useEffect(() => {
    if (location.pathname === '/signin' || location.pathname === '/signup') {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [location])
  /**
   * The useEffect hook in React is used to monitor the scroll position of the window and update a
   * state variable based on whether the user has scrolled or not.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);  // Toggle menu visibility on click
    showLogo(!showLogo);
  };

  return (
    <header className={`sticky top-0 z-50 mb-4 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <nav className='flex justify-between items-center h-20 px-4 border-b'>
        <img onClick={toggleMenu} className={logo ? 'hidden' : 'block, ml-20'} src={Logo} alt='ExploreMongolia.svg' width={160} height={40} />
        <ul className='flex space-x-4 hidden md:flex mr-16'> {/* Hidden on mobile */}
          <li>
            <button className='text-black bg-transparent px-4 py-2 rounded-full'>
                Tours
            </button>
          </li>
          <li>
            <button className='text-black bg-transparent px-4 py-2 rounded-full'>
                Blogs
            </button>
          </li>
          <li>
            <button className='text-black bg-transparent px-4 py-2 rounded-full'>
                About Us
            </button>
          </li>
          <li>
            <button className='text-black bg-transparent px-4 py-2 rounded-full ml-4'>
                Contact
            </button>
          </li>
          <li>
            <Link to='/signin' className='bg-black text-white px-4 py-2 rounded-full ml-4'>
                Register
            </Link>
          </li>
        </ul>
        
        {/* Hamburger */}
        <div onClick={toggleMenu} className='md:hidden z-10 items-center'>
            {showMenu ? <IoCloseOutline size={20} />  : <RxHamburgerMenu size={20} />}
        </div>

        {/* Mobile menu dropdown */}
        <div onClick={toggleMenu} className={showMenu ? 'absolute left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <img src={Logo} alt='ExploreMongolia.svg' width={160} height={40} />
            <ul>
                <li className='border-b'>
                    Tours
                </li>
                <li className='border-b'>
                    Blogs
                </li>
                <li className='border-b'>
                    About Us
                </li>
                <li className='border-b'>
                    Contact
                </li>
                <div className='flex flex-col'>
                    <li>
                        <Link to='/signin' className='bg-black text-white px-4 py-2 rounded-full ml-4'>
                            Register
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
