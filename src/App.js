import React from 'react';
import './style.css';
import './App.css';
import Navbar from './navbar';
import Home from './component/hero/hero';
import About from './component/about/about';
import Contact from './component/contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home   />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;