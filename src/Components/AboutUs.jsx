import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import TopButton from './Topbutton';

const AboutUs = () => {
  const [visible, setVisible] = useState(false);


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
    <Helmet>
      <title>About CodeZode – Empowering Developers for Global Tech Careers</title>
      <meta name='description' content='Learn how CodeZode helps developers worldwide land top jobs through structured interview prep, real success stories, and a growing dev community.'/>
    </Helmet>
    <nav>
    <Navbar/>
    </nav>
    <main className="bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] ">
      <div className=" text-gray-800 px-6 py-20 md:py-28 lg:py-36 md:px-20 font-[Poppins]">
        <div className="max-w-5xl mx-auto space-y-16">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white relative 
                after:content-[''] after:block after:h-1 after:w-24 sm:after:w-36 after:bg-blue-800 after:mx-auto after:mt-2 rounded ${animate(0)}
                `}
                >
            About Us
          </h1>

          <section className={`space-y-4 text-center ${animate(200)}`}>
            <h2 className="text-3xl md:text-4xl text-blue-300 font-semibold">🚀 Our Mission</h2>
            <p className="text-base md:text-xl text-white">
              At <span className="font-bold">Code Zode</span>, our goal is simple:
              <br />
              <span className="italic">
                To provide clean, ad-free, and curated coding questions that help developers prepare confidently for interviews.
              </span>
            </p>
          </section>

         <section className={` flex flex-col justify-center items-center text-center space-y-4 ${animate(300)}`}>
  <h2 className="text-3xl md:text-4xl text-blue-300 font-semibold">🛠️ Why Code Zode?</h2>
  <ul className="list-disc list-inside space-y-2 text-left md:text-xl text-white">
    <li>No logins, ads, or trackers — just pure content</li>
    <li>Simple UI focused on learning</li>
    <li>Beginner to advanced-level question sets</li>
    <li>100% free and open for everyone</li>
  </ul>
</section>


            <section className={`bg-white px-6 py-12 md:px-20 ${animate(400)}`}>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold text-center text-blue-900">
                  💬 We’d Love Your Feedback!
                </h2>
                <p className="text-center text-gray-700 text-lg">
                  Share your thoughts, suggestions, or appreciation — it helps us grow!
                </p>

               <form
                 action="https://formspree.io/f/xyzpynpr"  
                 method="POST"
                 className="space-y-4"
>
                  <input
                    name='name'
                    type="text"
                    placeholder="Your Good Name"
                    className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                    />
                  <textarea
                    name='message'
                    required
                    placeholder="Your message or feedback..."
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                  ></textarea>

                  <button
                    className="relative cursor-pointer flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Submit Feedback
                    </span>
                  </button>
                </form>
              </div>
            </section>

          <section className={`space-y-8 text-center ${animate(500)}`}>
            <h2 className="text-3xl text-blue-400 md:text-4xl font-semibold">📩 Get in Touch</h2>
            <p className="text-base md:text-xl text-white">
              Have feedback or suggestions? Email us at:{' '}
              <a
                href="mailto:testing.codecrack@gmail.com"
                className="text-blue-300 underline"
                >
                testing.codezode@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
      <TopButton/>
    </main>
                  </>
  );
};

export default AboutUs;
