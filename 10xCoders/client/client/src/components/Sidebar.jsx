import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaSuitcase, 
  FaCode, 
  FaUserCircle, 
  FaCalendarAlt, 
  FaSignOutAlt, 
  FaLaptopCode, 
  FaShareAlt,
  FaKeyboard 
} from 'react-icons/fa';
import { SiGooglemeet } from "react-icons/si";
import navbarlogo from "../assets/navbarlogo.png";

const Sidebar = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col p-6 sticky top-0 left-0 shadow-2xl overflow-y-auto">
      {/* Logo Section */}
      <div className="relative flex justify-center mb-8">
        <img
          src={navbarlogo}
          alt="Logo"
          className="w-48 h-16 hover:scale-105 transition-transform duration-300"
        />
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Navigation Sections */}
      <div className="flex-grow space-y-3 mb-6">
        {[
          { to: "/home", icon: <FaHome />, text: "Home" },
          { to: "/Interview", icon: <SiGooglemeet />, text: "Interview" },
          { to: "/career", icon: <FaSuitcase />, text: "Resume" },
          { to: "/skills", icon: <FaCode />, text: "Skill Development" },
          {
            to: "/planyourday", icon: <FaCalendarAlt />, text: "Plan Your Day"
          },
          { to: "/machine-coding", icon: <FaLaptopCode />, text: "Machine Coding" },
          { to: "/enhance-social", icon: <FaShareAlt />, text: "Enhance Social" },
          { to: "/typing-test", icon: <FaKeyboard />
            , text: "Enhance Typing Skill" },
          { to: "/userprofile", icon: <FaUserCircle />, text: "Profile" }
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
              {item.icon}
            </span>
            <span className="font-medium relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              {item.text}
            </span>
          </Link>
        ))}
      </div>

      {/* Logout Section - Fixed to remain within the sidebar */}
      <div
        onClick={handleLogout}
        className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-red-700/20 hover:from-red-500/30 hover:to-red-700/30 cursor-pointer transition-all duration-300 group mt-auto"
      >
        <FaSignOutAlt className="text-xl group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;