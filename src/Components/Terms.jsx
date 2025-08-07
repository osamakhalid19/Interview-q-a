import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import TopButton from './Topbutton';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  
   useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, []);

  return (
    <>
    <Helmet>
      <title>CodeZode Privacy Policy – Your Data, Our Responsibility</title>
      <meta name='description' content='Read how CodeZode collects, uses, and protects your data. Your privacy is important to us. Full GDPR and CCPA compliance information included.' />
    </Helmet>
      <nav>
<Navbar/>
      </nav>

      <main className='bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)]'>
        <div className="min-h-screen pt-28 mb-20  text-white font-[Poppins]">
          <div className={`max-w-4xl mx-auto bg-[linear-gradient(109.6deg,_rgb(14,11,56)_11.2%,_rgb(239,37,37)_91.1%)] rounded-2xl shadow-xl border border-blue-100 p-8 sm:p-12 md:p-16 
            transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

          <h1 className={`relative text-4xl sm:text-5xl font-extrabold mb-10 text-center text-white 
  transition-all duration-1000 ease-out delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
  Privacy Policy
  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-16px] h-1 w-[40%] bg-blue-500 rounded-full" />
</h1>



            <p className={`text-xl leading-relaxed mb-6 text-center 
              transition-all duration-1000 ease-out delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              At <span className="font-bold text-white">Code Zode</span>, we value your privacy. Here’s how we handle information while you browse our website.
            </p>

            <section className="space-y-8 text-base md:text-lg">
              <div className={`transition-all duration-1000 ease-out delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-2">1. No Personal Data Collection</h2>
                <p>We <strong>do not collect</strong> any personal information such as names, email addresses, or contact details when you browse our website.</p>
              </div>

              <div className={`transition-all duration-1000 ease-out delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-2">2. No Account or Registration</h2>
                <p>You are not required to create an account or log in to access any part of our content. The entire platform is open and free to use.</p>
              </div>

              <div className={`transition-all duration-1000 ease-out delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-2">3. No Tracking or Analytics</h2>
                <p>We do <strong>not use cookies</strong>, analytics, or any tracking tools. Your browsing experience is entirely private and anonymous.</p>
              </div>

              <div className={`transition-all duration-1000 ease-out delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-2">4. No Third-Party Sharing</h2>
                <p>We never share user information with third parties because we don’t collect any. Your data, your privacy — always.</p>
              </div>

              <div className={`transition-all duration-1000 ease-out delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-2">5. Future Changes</h2>
                <p>If our policies ever change, you’ll find updated details on this page. We'll always keep it transparent.</p>
              </div>
            </section>
          </div>
        </div>
        <TopButton/>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
