import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about  text-white px-4 md:px-12 py-10">
      
      {/* About Me Header */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-2xl md:text-3xl font-bold font-mono text-white mb-6"
      >
        <span className="text-green-400">About</span> Me
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="text-justify font-mono text-sm md:text-base">
          <p>
            Hi people, I am{" "}
            <span className="text-green-400 font-bold">KiranKumar</span> from Chennai, India.
            I did my B.E in Mechanical Engineering from{" "}
            <span className="text-green-400 font-bold">Akshaya College of Engineering</span>,
            and currently I'm working at{" "}
            <span className="text-green-400 font-bold">Technomax Systems</span>.
          </p>

          <br />

          <p>
            Apart from development, some things I like are:
            <ul className="mt-2 space-y-1">
              <li><BsFillArrowRightSquareFill className="inline mr-2" />Playing Badminton</li>
              <li><BsFillArrowRightSquareFill className="inline mr-2" />Gardening</li>
              <li><BsFillArrowRightSquareFill className="inline mr-2" />Travelling</li>
            </ul>
          </p>
        </div>

        {/* <img
          src={codeImage}
          alt="Coder"
          className="w-40 h-auto rounded-md"
          data-aos="zoom-in-left"
        /> */}
      </div>

      {/* Spacer before TechStack */}
      <div className="mt-16">
        <TechStack />
      </div>

      {/* GitHub Contribution Header */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-2xl md:text-3xl font-bold font-mono mt-16 mb-6"
      >
        My <span className="text-green-400">GitHub</span> Contribution Graph
      </div>

      {/* GitHub Graph */}
      <div className="github-graph mb-10">
        <GitHubCalendar
          username="tmax-kiran"
          blockMargin={6}
          blockSize={15}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
