import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import Whyuse from './Whyuse';
import { Link } from 'react-router-dom';
import Card from './Reviews';
import Footer from './Footer';
import TopButton from './Topbutton';
import ReactGA from 'react-ga4';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  
   useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY < 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  setVisible(true);

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}, []);

  return (
    <>
    <Helmet>
      
      <title>CodeZode – Top Interview Questions & Coding Prep for Developers (2025)</title>
      <meta name='description' content='Prepare for your dream tech job with CodeZode! Get access to top interview questions, answers, and coding challenges for Java, Python, React, and more. Updated for 2025.' />
    </Helmet>
    <main>
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('./images/bg.jpg')" }}
    >
      <Navbar />
      <div className="absolute inset-0 backdrop-blur-xs" />

      <div className="h-full flex flex-col justify-center items-center text-center px-10 sm:px-14 md:px-18 lg:px-24 pt-28 pb-12 relative z-10">
        <h1
          className={`
            text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-10 sm:mt-12 md:mt-16 lg:mt-20
            transition-all duration-1000 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Ace Your Tech Interviews...!
        </h1>

        <p
          className={`
            text-blue-100 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 text-center font-bold
            transition-all duration-1000 ease-out delay-200
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Master the most frequently asked coding and system design questions, strengthen your core fundamentals,
          and build confidence for your next big opportunity. Whether you're a beginner or an experienced developer,
          our curated content will help you stay ahead in tech interviews with clarity, speed, and precision.
        </p>

     <Link to={'interview-prep'} >
        <button
          className={`
            relative overflow-hidden z-10
            px-6 py-2 font-semibold rounded-lg text-lg
            bg-white text-blue-900 cursor-pointer
            hover:bg-blue-900 hover:text-white
            transition duration-300 ease-out delay-100
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            custom-button
            `}
            >
          <span className="absolute inset-0 border-4 border-blue-700 z-[-1] rounded-lg"></span>
          Start Practicing
        </button>
     </Link>
      </div>
    </div>
            </main>
            <section>
           <Whyuse/>
            <Card/>
            <Footer/>
            <TopButton/>
            </section>
                </>
  );
};

export default Home;
