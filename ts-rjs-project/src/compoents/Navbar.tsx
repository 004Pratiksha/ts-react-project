import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
     
      <div className="text-2xl font-bold tracking-wide">B</div>

      
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#home"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#apps"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Apps
          </a>
        </li>
        <li>
          <a
            href="#blogs"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="#careers"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Careers
          </a>
        </li>
      </ul>

      
      <button className="px-6 py-2 border border-white rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white transition duration-300">
        Book a Slot
      </button>

     
      <div className="md:hidden">
        <button className="text-2xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
