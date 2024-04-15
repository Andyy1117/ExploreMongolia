import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'

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
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
