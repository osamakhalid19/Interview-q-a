import React from 'react';

const reviews = [
  {
    name: "Ahmed Raza",
    designation: "Frontend Developer, UAE",
    review: "Code Zode gave me the confidence to reapply after failing two interviews. Landed a role with a startup in Dubai!",
  },
  {
    name: "Sana Tariq",
    designation: "Software Engineer, Canada",
    review: "I moved to Canada last year. This app helped me prep for FAANG-style interviews, and I’m now with a growing AI company.",
  },
  {
    name: "Usman Khalid",
    designation: "Backend Engineer, Germany",
    review: "It structured my preparation beautifully. The system design section especially helped me get through technical rounds.",
  },
  {
    name: "Aiko Tanaka",
    designation: "Full Stack Developer, Japan",
    review: "Impressive platform. It gave me a roadmap for interview success, especially with coding patterns and mock questions.",
  },
  {
    name: "Carlos Mendez",
    designation: "Mobile Developer, Brazil",
    review: "As a self-taught developer, Code Zode bridged my gap with solid interview prep. Got an offer from a fintech firm.",
  },
  {
    name: "Emily Clarke",
    designation: "Junior Developer, UK",
    review: "I loved the clean interface and progress tracking. After consistent practice, I finally got my first dev job in London.",
  },
];

const Reviews = () => {
  return (
    <>
    
    <section className="bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] py-20 px-6 md:px-20">
     <h1
            className={`text-3xl sm:text-4xl md:text-5xl mb-16 font-extrabold text-center font-[poppins] text-white relative 
                 rounded 
                `}
                >
             Real Stories from Developers
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-16px] h-1 w-[30%] bg-blue-500 rounded-full" />

          </h1>

      <div className="overflow-hidden cursor-pointer">
        <div className="flex space-x-8 animate-scroll-on-hover">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="min-w-[300px] sm:min-w-[320px] md:min-w-[350px] max-w-md bg-white border border-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-95 transition-all duration-300 ease-in-out h-auto"
              >
              <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed font-medium break-words whitespace-normal">
                “{r.review}”
              </p>
              <div className="text-right text-blue-800 font-semibold text-base md:text-lg">
                — {r.name}
                <div className="text-sm text-blue-600 font-normal">{r.designation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          </>
  );
};

export default Reviews;



