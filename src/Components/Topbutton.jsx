import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 cursor-pointer sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp className=" text-lg sm:text-xl" />
    </button>
  );
};

export default TopButton;
