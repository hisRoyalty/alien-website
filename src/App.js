import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Decrypt from './component/Decrypt';
import Home from './component/Home'
import Footer from './component/Footer';
import About from './component/About';
import Tracking from './component/Tracking'
import ContactUs from './component/ContactUs';
import AlienGallery from './component/AlienGallery';
import Weapons from './component/Weapons'
import News from './component/News'





const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decrypt" element={<Decrypt />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<AlienGallery />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/news" element={<News />} />



        
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;