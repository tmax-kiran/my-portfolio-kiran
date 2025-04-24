import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0A192F] to-[#19294D] text-gray-300 py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Developer Info */}
        <span className="text-sm font-light tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="text-white font-semibold">KiranKumar</span>
        </span>

        {/* Contact Text */}
        {/* <div className="text-sm text-center md:text-left">
          📧 Reach me at:{" "}
          <a
            href="mailto:kirankumar.dev@example.com"
            className="text-cyan-400 hover:underline"
          >
            kirannatarajan26@gmail.com
          </a>
        </div> */}

        {/* Social Icons */}
        <ul className="flex gap-6">
          <li>
            <a href="https://github.com/tmax-kiran" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black dark:hover:text-white transition-all duration-200 transform hover:scale-110" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/kirankumar-creative/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/designedbykiran2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-all duration-200 transform hover:scale-110" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
