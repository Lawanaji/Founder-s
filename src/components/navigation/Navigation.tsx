import React, { useState } from 'react';
import logo from '../../assets/img/Frame 8.svg';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="w-full h-[100px] flex items-center justify-between bg-white fixed px-5 md:px-10 top-0 left-0 z-50 border-b-gray-500 border">
     
        <img src={logo} alt="Logo" className="" />

           <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

       
        <ul
          className={`absolute md:static top-[100px] left-0 w-full md:w-auto bg-white md:flex md:items-center md:justify-between md:gap-14 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="text-gray-800 hover:text-primaryColor text-center py-2 md:py-0">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-800 hover:text-primaryColor text-center py-2 md:py-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-gray-800 hover:text-primaryColor text-center py-2 md:py-0">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="text-gray-800 hover:text-primaryColor text-center py-2 md:py-0">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-center py-2 md:py-0">
            <Link
              to="/register"
              className="px-6 py-2 flex justify-center items-center gap-2 border border-primaryColor text-primaryColor rounded-xl transition"
            >
              Register
              <ArrowRight  size={20} weight="bold" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
