import React, { useState, useEffect } from "react";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql, SiSpringboot } from "react-icons/si";
import { FaAws, FaDocker } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import MaterialUI from "../../assets/MaterialUI.svg";
import { CgFigma } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";









// Custom card component to replace Semantic UI
const TechCard = ({ children }) => {
  return (
    <div className="tech-card">
      {children}
    </div>
  );
};

const TechStack = () => {
  const [, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="techstack">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        My  <span style={{ color: "#32CD30" }}>SkillSet</span>
      </h1>

      <div data-aos="zoom-in-up" className="techstack-grid">
        <TechCard >
          <TfiHtml5 style={{ width: "100%", height: "auto", color: "black" }} />
        </TechCard>

        <TechCard>
          <FaCss3Alt style={{ width: "100%", height: "auto", color: "red" }} />
        </TechCard>

        <TechCard>
          <DiJavascript1 style={{ width: "100%", height: "auto", color: "#FFC300" }} />
        </TechCard>

        <TechCard>
          <DiReact style={{ width: "100%", height: "auto", color: "#61DBFB" }} />
        </TechCard>

        <TechCard>
          <DiNodejs style={{ width: "100%", height: "auto", color: "green" }} />
        </TechCard>

        <TechCard>
          <DiMongodb style={{ width: "100%", height: "auto", color: "green" }} />
        </TechCard>

        <TechCard>
          <SiTailwindcss style={{ width: "100%", height: "auto", color: "#00758f" }} />
        </TechCard>

        <TechCard>
          <FaBootstrap style={{ width: "100%", height: "auto", color: "0db7ed" }} />
        </TechCard>

        <TechCard>
          <img src={MaterialUI} style={{ width: "100%", height: "auto", color: "green" }} />
        </TechCard>

        <TechCard>
          <CgFigma style={{ width: "100%", height: "auto", color: "#F76E5F" }} />
        </TechCard>

        <TechCard>
          <BiLogoTypescript style={{ width: "100%", height: "auto", color: "#2F74C0" }} />
        </TechCard>

        <TechCard>
          <FaGithub style={{ width: "100%", height: "auto", color: "#000000" }} />
        </TechCard>

        <TechCard>
          <SiStyledcomponents style={{ width: "100%", height: "auto", color: "#D07CBF" }} />
        </TechCard>
      </div>
    </div>
  );
};

export default TechStack;