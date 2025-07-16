import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import questions from './Data';
import Navbar from './Navbar';
import Footer from './Footer';
import TopButton from './Topbutton';
import { FaCopy } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const SingleQuestion = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { category } = useParams();
  const data = questions[category];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (!data) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        No questions found for "{category}"
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <div className="min-h-screen px-4 pt-24 pb-12 bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] text-white">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Back Button */}
            <div>
              <Link to="/interview-prep">
                <button
                  className={`relative overflow-hidden z-10 px-6 py-2 font-semibold rounded-lg text-lg
                    bg-white text-blue-900 cursor-pointer hover:bg-blue-900 hover:text-white
                    transition duration-300 ease-out delay-100
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    custom-button
                  `}
                >
                  <span className="absolute inset-0 border-4 border-blue-700 z-[-1] rounded-lg"></span>
                  Back
                </button>
              </Link>
            </div>

            {/* Heading Below Button */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Most Popular & Frequently Asked {category} Questions
            </h2>

            {/* Questions */}
            <div className="space-y-6">
              {data.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="bg-gray-100 hover:scale-103 transition-transform duration-300 text-black p-6 rounded-xl shadow-md cursor-pointer relative group"
                >
                  {/* Copy Button */}
                  <button
                    onClick={() =>
                      handleCopy(`Q: ${item.question}\nA: ${item.answer}`)
                    }
                    className="absolute text-lg top-4 right-4 cursor-pointer text-gray-500 hover:text-blue-600"
                    title="Copy Q&A"
                  >
                    <FaCopy />
                  </button>

                  <h3 className="font-semibold text-xl mb-2">{item.question}</h3>
                  <p className="text-gray-800 text-lg break-words">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <TopButton/>
      <Footer />
    </>
  );
};

export default SingleQuestion;
