import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] text-white py-10 px-4 md:px-20 font-[Poppins]">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-wrap justify-center items-center text-xl font-medium space-x-6">
          <Link to="/interview-prep" className="group relative">
            <span className="relative z-10">Interview Prep</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>

          <span className="text-gray-400">|</span>

          <Link to="/about-us" className="group relative">
            <span className="relative z-10">About Us</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>

          <span className="text-gray-400">|</span>

          <Link to="/privacy-policy" className="group relative">
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="w-2/3 h-px bg-blue-800/50" />

        <div className="text-lg md:text-lg text-gray-400 text-center">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Code Zode</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
