import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import {SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="p-4 bg-skyblue rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 footer">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text">
        Developed by  KiranKumar
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 footer-contact">
        <li>
          <a href="https://github.com/tmax-kiran" className="mr-4 hover:underline md:mr-6 ">
            <BsGithub style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abhinav-kumar-904254195/" className="mr-4 hover:underline md:mr-6">
            <BsLinkedin style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Abhinav36650041" className="mr-4 hover:underline md:mr-6">
            <BsTwitter style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/abhi_nav2011/" className="mr-4 hover:underline md:mr-6">
            <SiLeetcode style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
