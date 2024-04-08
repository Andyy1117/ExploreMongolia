import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {
  const [currentPage, setCurrentPage] = useState('Landing');

  const handleNavbarClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <BrowserRouter>
      <Navbar onNavbarClick={handleNavbarClick} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
