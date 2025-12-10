import React from "react";
import HomeBottomPage from "./HomeBottomPage";
import developer from "../../assets/developer.svg";
import TypeAnimation from "./TypeAnimation";
import BlurTextAnimation from "./BlurTextAnimation";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import Profile from "../../assets/Profile.png";

const HomePage = () => {
  // const handleAnimationComplete = () => {
  //   console.log('Animation completed!');
  // };
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          {/* <div className="heading-text">
          <h1
            style={{
              fontFamily: "Fira Code",
              fontSize: "2.5rem",
              position: "static",
              
            }}
          >
            HI
          </h1>
          <h1
            style={{
              fontFamily: "Fira Code",
              fontSize: "2.5rem",
              position: "static",
            }}
          >
            I'M{" "}
            <span
              style={{
                color: "#32CD30",
                position: "static",
                textDecoration: "",
              }}
            >
              KIRANKUMAR
            </span>
          </h1>
        </div> */}
          {/* <div data-aos="fade-down-right"  className="flex flex-col items-center">
            <BlurTextAnimation
              text="Hi There,"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl text-white"
            />

            <div className="flex items-center mt-2">
              <BlurTextAnimation
                text="I'm "
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl text-white"
              />
              <BlurTextAnimation
                text="KIRANKUMAR N"
                delay={450}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
               className="text-4xl text-limegreen"
              />
            </div>
          </div> */}

          <div data-aos="fade-down-right" className="text-center mt-8">
            <h1 className="text-4xl font-bold text-[#ffffff]">
              Hi There,
            </h1>
            <h1 className="text-5xl font-extrabold mt-4">
              I'm <span className="text-[#ffffff]">KIRAN<span className="text-[#32CD30]">KUMAR N</span></span>

            </h1>
          </div>

          <p data-aos="fade-down-right" className="text-xl mt-4">
            I Am Into <span className="text-[#32CD30]"><TypeAnimation /></span>
          </p>
          {/* <button className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            About Me <span className="ml-2 text-xl">⬇️</span>
          </button>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}

        </div>

        <img
          data-aos="fade-down-left"
          className="rounded w-36 h-36 homepage-avatar"
          src={developer}
          alt="Extra large avatar"
        ></img>
      </div>
      <HomeBottomPage />
    </div>

  );
};

export default HomePage;
