import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopButton from './Topbutton';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaAndroid,
  FaApple,
  FaLaravel,
  FaSwift,
  FaTools,
} from 'react-icons/fa';

const categories = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'Vue.js', icon: <FaVuejs /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Laravel', icon: <FaLaravel /> },
  ],
  Database: [
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'PostgreSQL', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
  ],
  DevOps: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Linux', icon: <FaLinux /> },
  ],
  Mobile: [
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'iOS', icon: <FaApple /> },
    { name: 'Swift', icon: <FaSwift /> },
  ],
  Tools: [
    { name: 'Dev Tools', icon: <FaTools /> },
  ],
};

const colors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-600',
  'bg-pink-500',
  'bg-yellow-500',
  'bg-cyan-500',
  'bg-indigo-600',
  'bg-rose-500',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};


const InterviewPrep = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  
  const allSubcategories = Object.values(categories).flat();
  const subcategories = selected ? categories[selected] : allSubcategories;
  
  useEffect(() => {
      const timer = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(timer);
    }, []);

  const animate = (delay = 0) =>
      `transition-all duration-2500 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } delay-[${delay}ms]`;
  return (
    <>
    <nav>
    <Navbar/>
    </nav>

    <main>
    <div className="min-h-screen bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] text-white px-4 py-20 md:py-28 lg:py-36">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14 font-[Poppins]">
        <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white dark:text-blue-400 relative 
                 rounded ${animate(0)}
                `}
                >
            Interview Prep
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-16px] h-1 w-[20%] bg-blue-500 rounded-full" />

          </h1>
        <p className={`text-xl md:text-2xl mt-8 max-w-3xl mx-auto font-medium text-blue-100 ${animate(200)}`}>
          Explore categorized interview questions for frontend, backend, DevOps, mobile, databases and more —
          designed to help you crack your dream job!
        </p>
      </div>

      {/* Dropdown Filter */}
      <div className={`flex justify-center mb-10 ${animate(200)}`}>
        <div className="relative inline-block text-left group">
          <button className="flex items-center gap-2 px-6 py-3 font-medium text-black dark:text-white rounded-xl border border-gray-300 dark:border-gray-600 transition-all bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer font-[Poppins] duration-300">
            {selected || 'Select Category'}
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                selected ? 'rotate-180' : 'rotate-0'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              >
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.185l3.71-3.955a.75.75 0 1 1 1.08 1.04l-4.24 4.52a.75.75 0 0 1-1.08 0l-4.24-4.52a.75.75 0 0 1 .02-1.06z" />
            </svg>
          </button>

          <ul className={`absolute left-0 w-full mt-2 rounded-xl shadow-lg  bg-white dark:bg-gray-800 border dark:border-gray-600 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10`}>
            {Object.keys(categories).map((cat) => (
              <li
              key={cat}
              onClick={() => setSelected(cat)}
              className="px-6 py-3 text-black hover:bg-blue-600 hover:text-white cursor-pointer font-[Poppins] transition-all rounded-xl"
              >
                {cat}
              </li>
            ))}
            <li
              onClick={() => setSelected('')}
              className="px-6 py-3 text-black font-[Poppins] hover:bg-blue-600 hover:text-white cursor-pointer rounded-xl transition-all"
              >
              Show All
            </li>
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className={`grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto`}>
        {subcategories.map((sub, index) => (
          <Link to={`/interview-prep/${sub.name}`} key={sub.name}>
          <motion.div
            key={sub.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl text-white text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${colors[index % colors.length]}`}
            >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-3">{sub.icon}</div>
            <div>{sub.name}</div>
          </motion.div>
            </Link>
        ))}
      </div>
     

    </div>
   <TopButton/>
    <Footer/>
              </main>
        </>
  );
};

export default InterviewPrep;
