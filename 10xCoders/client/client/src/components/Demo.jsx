import React from 'react';
import { FaLaptopCode, FaClipboardCheck, FaChartLine, FaArrowRight } from 'react-icons/fa';
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="w-full py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-6 leading-tight">
            Ready to elevate your tech
            <div className="inline-flex flex-wrap items-center gap-2 mx-2">
              <span className="relative inline-block">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500 relative inline-block">
                  <span className="relative text-white">career</span>
                </span>
              </span>
              and
              <span className="relative inline-block">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-green-500 before:to-emerald-500 relative inline-block">
                  <span className="relative text-white">skills</span>
                </span>
              </span>
            </div>
            to new heights?
          </h1>

          {/* Subheading */}
          <p className="text-xl text-center font-medium text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            Stand Out in Tech, Be 10x Better coder than you are today. 
            <br className="hidden md:block" />
            Prepare, excel, and land your dream role.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 px-4 max-w-screen-xl mb-12">
        {/* Card 1: Master Technical Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-blue-500 
                    transition transform hover:scale-105 hover:shadow-2xl group">
          <div className="bg-blue-50 p-4 rounded-xl mb-6 inline-block group-hover:bg-blue-100 transition">
            <FaLaptopCode className="text-5xl text-blue-500 group-hover:scale-110 transition" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Master Technical Skills</h3>
          <p className="text-gray-600 leading-relaxed mb-6">Sharpen your coding skills with hands-on practice and real-world projects.</p>
          <div className="text-blue-500 font-semibold group-hover:text-blue-600 transition flex items-center justify-center gap-2">
            Learn More <FaArrowRight className="group-hover:translate-x-1 transition" />
          </div>
        </div>

        {/* Card 2: Interview Preparation */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-green-500 
                    transition transform hover:scale-105 hover:shadow-2xl group">
          <div className="bg-green-50 p-4 rounded-xl mb-6 inline-block group-hover:bg-green-100 transition">
            <FaClipboardCheck className="text-5xl text-green-500 group-hover:scale-110 transition" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Prepare For Interview</h3>
          <p className="text-gray-600 leading-relaxed mb-6">Get ready for interviews with mock interviews, tips, and expert guidance.</p>
          <div className="text-green-500 font-semibold group-hover:text-green-600 transition flex items-center justify-center gap-2">
            Learn More <FaArrowRight className="group-hover:translate-x-1 transition" />
          </div>
        </div>

        {/* Card 3: Career Growth */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-cyan-500 
                    transition transform hover:scale-105 hover:shadow-2xl group">
          <div className="bg-cyan-50 p-4 rounded-xl mb-6 inline-block group-hover:bg-cyan-100 transition">
            <FaChartLine className="text-5xl text-cyan-500 group-hover:scale-110 transition" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Growth</h3>
          <p className="text-gray-600 leading-relaxed mb-6">Learn strategies to grow your resume and stand out in the tech industry.</p>
          <div className="text-cyan-500 font-semibold group-hover:text-cyan-600 transition flex items-center justify-center gap-2">
            Learn More <FaArrowRight className="group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>

      {/* Bottom CTA Box */}
      <div className="px-4 max-w-screen-xl w-full mb-16">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16 px-8 text-center 
                      shadow-xl rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[length:20px_20px]"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl mb-8 text-blue-50">Take the first step towards your dream career.</p>
            <button className="bg-white text-blue-500 py-4 px-8 rounded-xl font-bold 
                           hover:bg-blue-50 transition duration-300 shadow-lg
                           transform hover:scale-105 hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;