import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://media.discordapp.net/attachments/744120656278454274/1134401313065668629/NASA_Worm_logo.png?width=1200&height=331" alt="NASA logo" className="ml-4 w-30 h-10 mr-2" />
          <div className="text-white font-bold text-xl font-mono">Extraterrestrial</div>
        </div>
        <nav className="ml-4 mr-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-gray-300 hover:text-white transition duration-300">
                News
              </Link>
            </li>
            <li>
              <Link to="/weapons" className="text-gray-300 hover:text-white transition duration-300">
                Weapons
              </Link>
            </li>
            <li>
              <Link to="/tracking" className="text-gray-300 hover:text-white transition duration-300">
                Tracking
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/decrypt" className="text-gray-300 hover:text-white transition duration-300">
                Decrypt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;