import React from 'react';

const Whyuse = () => {
  return (
     <>
      <section className="text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)]">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Code Zode?</h2>
          
          <p className="mb-4 text-lg md:text-xl leading-relaxed">
            Code Zode helps you prepare for technical interviews with confidence. Whether you're a beginner or experienced developer, our tools are designed to:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl">
            <li>Master top coding interview questions.</li>
            <li>Improve system design knowledge with real-world patterns.</li>
            <li>Track your progress and stay focused.</li>
            <li>Access curated, up-to-date resources.</li>
          </ul>

          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            Our platform isn't just about practice — it's about transforming the way you learn. With smart guidance and a structured approach, Code Zode gives you the edge to stand out in a competitive tech landscape. Join thousands who’ve cracked top tech interviews with us!
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./images/image1.jpg"
            alt="Why Use Code Zode"
            className="w-full sm:max-w-sm md:max-w-md rounded-lg shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
        </div>
      </section>
    
            </>
  );
};

export default Whyuse;
