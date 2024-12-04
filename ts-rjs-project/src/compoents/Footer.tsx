import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://in.linkedin.com"
            target="_blank"         
            className="text-gray-500 hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"   
            className="text-gray-500 hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
