import React, { useEffect, useState } from "react";
import {
  DiJava, DiJavascript1, DiReact, DiNodejs, DiMongodb,
} from "react-icons/di";
import { CgCPlusPlus, CgFigma } from "react-icons/cg";
import { SiMysql, SiSpringboot, SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { FaAws, FaDocker, FaGithub, FaBootstrap } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import MaterialUI from "../../assets/MaterialUI.svg";

const TechCard = ({ children }) => {
  return (
    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white shadow-md rounded-2xl transition transform hover:scale-110 hover:shadow-lg animate-pulse-on-hover">
      {children}
    </div>
  );
};

const TechStack = () => {
  const [, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div  className="py-12 px-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-2xl">
      <h1 className="text-2xl md:text-4xl font-bold font-mono text-center mb-10">
        My <span className="text-green-400">SkillSet</span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
        <TechCard><TfiHtml5 className="w-10 h-10 text-orange-600" /></TechCard>
        <TechCard><FaCss3Alt className="w-10 h-10 text-blue-500" /></TechCard>
        <TechCard><DiJavascript1 className="w-10 h-10 text-yellow-400" /></TechCard>
        <TechCard><DiReact className="w-10 h-10 text-blue-300" /></TechCard>
        <TechCard><DiNodejs className="w-10 h-10 text-green-500" /></TechCard>
        <TechCard><DiMongodb className="w-10 h-10 text-green-600" /></TechCard>
        <TechCard><SiTailwindcss className="w-10 h-10 text-teal-400" /></TechCard>
        <TechCard><FaBootstrap className="w-10 h-10 text-purple-600" /></TechCard>
        <TechCard><img src={MaterialUI} alt="Material UI" className="w-10 h-10" /></TechCard>
        <TechCard><CgFigma className="w-10 h-10 text-pink-500" /></TechCard>
        <TechCard><BiLogoTypescript className="w-10 h-10 text-blue-600" /></TechCard>
        <TechCard><FaGithub className="w-10 h-10 text-black dark:text-white" /></TechCard>
        <TechCard><SiStyledcomponents className="w-10 h-10 text-pink-400" /></TechCard>
      </div>
    </div>
  );
};

export default TechStack;
