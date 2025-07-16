import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <nav>

      {menuOpen && (
        <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white/5 backdrop-blur-xs px-4 md:px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
              <h1 className={`text-white font-[Poppins] font-extrabold text-xl md:text-xl`}>Code Zode</h1>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-10">
          <Link
  to="/"
  className={`group relative text-base lg:text-xl md:text-xl font-[Poppins] font-extrabold transition duration-300 text-white`}
>

              <span className="relative z-10">Home</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </Link>

           <Link
  to="/interview-prep"
  className={`group relative text-base lg:text-xl md:text-xl font-[Poppins] font-extrabold transition duration-300 text-white`}
>

              <span className="relative z-10">Interview Prep</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </Link>

          <Link
  to="/about-us"
  className={`group relative text-base lg:text-xl md:text-xl font-[Poppins] font-extrabold transition duration-300 text-white`}
>

              <span className="relative z-10">About Us</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </Link>

          <Link
  to="/privacy-policy"
  className={`group relative text-base lg:text-xl md:text-xl font-[Poppins] font-extrabold transition duration-300 text-white`}
>

              <span className="relative z-10">Privacy Policy</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>


          <div
className={`md:hidden text-3xl cursor-pointer z-50 text-white`}
            onClick={() => setMenuOpen(true)}
            >
            <RiMenu2Fill />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 z-50 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden p-6 pt-20`}
          >
        <div
          className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </div>

        <div className="flex flex-col space-y-6">
          <Link
            to="/"
            className="group relative text-xl font-[Poppins] text-white font-extrabold transition duration-300"
            onClick={() => setMenuOpen(false)}
            >
            <span className="relative z-10">Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/interview-prep"
            className="group relative text-xl font-[Poppins] text-white font-extrabold transition duration-300"
            onClick={() => setMenuOpen(false)}
            >
            <span className="relative z-10">Interview Prep</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/about-us"
            className="group relative text-xl font-[Poppins] text-white font-extrabold transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <span className="relative z-10">About Us</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/privacy-policy"
            className="group relative text-xl font-[Poppins] text-white font-extrabold transition duration-300"
            onClick={() => setMenuOpen(false)}
            >
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
            </nav>
    </>
  );
};

export default Navbar;
