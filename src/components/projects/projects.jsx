import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownloadCloud, FiGithub, FiExternalLink } from "react-icons/fi";
import WishCraft from "../../assets/WishCraft.png";
import CozyBites from "../../assets/CozyBites.png";
import NewYearPost from "../../assets/NewYearPost.mp4";
import DRINKS from "../../assets/DRINKS.mp4";
import CokeDrinks from "../../assets/CokeDrinks.mp4";
import Cocacolawithice from "../../assets/Cocacolawithice.mp4";
import Greetings from "../../assets/Greetings.mp4";
import BurgerPoster from "../../assets/BurgerPoster.png";
import Newyearwish from "../../assets/Newyearwish.mp4";
import BiriyaniPoster from "../../assets/BiriyaniPoster.png";
import PongalFestival from "../../assets/PongalFestival.png";
import Banner from "../../assets/Banner.png";
import NewCoffee from "../../assets/NewCoffee.mp4";
import BusinessCard from "../../assets/BusinessCard.mp4";
import DRrmock from "../../assets/DRrmock.jpg";
import Portfolioherosection from "../../assets/Portfolioherosection.png";
import Furniterhero from "../../assets/Furniterhero.png";


const Projects = () => {
  const featuredProjects = [
    {
      title: "WishCraft - Personalized Birthday Greetings Website",
      description:
        "WishCraft is an interactive birthday wishes website designed to create joyful, personalized greetings. It features playful animations, heartfelt messages, and an engaging UI.",
      technologies: [
        "React",
        "JavaScript(ES6)",
        "HTML5&CSS3",
        "Tailwind CSS",
        "Lottie/JSON animations",
        "Netlify",
      ],
      image: WishCraft,
      github: "https://github.com/tmax-kiran/birthday-template",
      liveDemo: "https://birthday-template-new.netlify.app/",
    },
    {
      title: "CozyBite – Minimal Restaurant Website",
      description:
        "A complete multi-page restaurant website featuring modern UI, smooth animations, and seamless navigation.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "CSS3",
        "Tailwind CSS",
        "Lucide React",
        "Netlify (Deployment)",
        "Framer Motion",
        "PostCSS",
      ],
      image: CozyBites,
      github: "",
      liveDemo: "https://brightmooncake.netlify.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      liveDemo: "",
      statusNote:
        "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
      isInProgress: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task tracking application with real-time updates and team management features.",
      technologies: ["React", "TypeScript", "Firebase", "Material UI"],
      image:
        "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      liveDemo: "",
      statusNote:
        "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
      isInProgress: true,
    },

    {
      title: "Single Page Landing Page",
      description:
        "A responsive and visually engaging single-page website designed to highlight key features or offerings.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1612425626229-632fab8bfc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZSUyMGhvbWUlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
      github: "",
      liveDemo: "",
      statusNote:
        "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
      isInProgress: true,
    },
  ];
const [activeTab, setActiveTab] = useState("uiux");
const [selectedDesign, setSelectedDesign] = useState(null);



const uiuxData = [
  {
    title: "Doctor Reservation App Mockup",
    type: "image",
    src: DRrmock,
  },
  {
    title: "Portfolioherosection Design",
    type: "image",
    src: Portfolioherosection,
  },
  {
    title: "Furniterhero Design",
    type: "image",
    src: Furniterhero,
  },
];

const graphicData = [
  {
    title: "Newyear wishes Poster Design",
    type: "video",
    src: NewYearPost,
  },
  {
    title: "Soft Drinks Animation Poster",
    type: "video",
    src: DRINKS,
  },
  {
    title: "Newyearwish Animation Poster",
    type: "video",
    src: Newyearwish,
  },

  {
    title: "Soft Drinks Animation Poster",
    type: "video",
    src: Cocacolawithice,
  },
  {
    title: "Soft Drinks Animation Poster",
    type: "video",
    src: Greetings,
  },
  {
    title: "CokeDrinks Animation Poster",
    type: "video",
    src: CokeDrinks,
  },
  {
    title: "BurgerPoster Design",
    type: "image",
    src: BurgerPoster,
  },
  {
    title: "CokeDrinks Animation Poster",
    type: "video",
    src: NewCoffee,
  },
  {
    title: "BiriyaniPoster Design",
    type: "image",
    src: BiriyaniPoster,
  },
  {
    title: "PongalFestival Poster Design",
    type: "image",
    src: PongalFestival,
  },
  {
    title: "PongalFestival Poster Design",
    type: "image",
    src: Banner,
  },
//     {
//     title: "CokeDrinks Animation Poster",
//     type: "video",
//     src: BusinessCard,
//   },
];
const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

const calcParallax = (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((centerX - x) / centerX) * 10;

  return { rotateX, rotateY, x, y };
};

  return (
    <>
      <div className="home-bottom-container">
        <div className="background-gradient"></div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="section-title"
        >
          UI/UX & Graphic Design <span className="highlight">Projects</span>
        </h1>
        {/* UI/UX & Graphic Design Tabs Section */}
        {/* TABS SECTION */}
        <div className="tabs-container mt-10">
          {/* TAB BUTTONS */}
          <div className="flex gap-4 justify-center mb-8">
            {["uiux", "graphic"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "uiux" ? "Graphic Design" : "UIUX Design"}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
            >
              {(activeTab === "uiux" ? graphicData : uiuxData).map(
                (item, index) => (
                  <motion.div
                    key={index}
                    className="relative apple-parallax-card rounded-xl p-4 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedDesign(item)}
                    onMouseMove={(e) => {
                      const { rotateX, rotateY, x, y } = calcParallax(e);
                      setTilt({ rotateX, rotateY });
                      setCursorPos({ x, y });
                    }}
                    onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
                    style={{
                      rotateX: tilt.rotateX,
                      rotateY: tilt.rotateY,
                      transition: "transform 0.15s ease-out",
                    }}
                  >
                    {/* Dynamic Shine That Follows Cursor */}
                    <div
                      className="apple-shine"
                      style={{
                        left: cursorPos.x - 150,
                        top: cursorPos.y - 150,
                      }}
                    ></div>

                    {/* Media */}
                    {item.type === "video" ? (
                      <video
                        src={item.src || item.img}
                        className="rounded-lg w-full"
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      <img
                        src={item.src || item.img}
                        className="rounded-lg w-full"
                      />
                    )}

                    <h3 className="text-white mt-3 text-lg font-semibold">
                      {item.title}
                    </h3>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="section-title"
        >
          Featured <span className="highlight">Projects</span>
        </h1>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              className={`project-card glass-effect ${
                project.isInProgress ? "dimmed" : ""
              }`}
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Show status note if exists */}
                {project.statusNote && (
                  <p className="project-status-tag">
                    {project.statusNote.split("\n").map((line, idx) => (
                      <span key={idx} style={{ display: "block" }}>
                        {line}
                      </span>
                    ))}
                  </p>
                )}

                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50"
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-lg w-[90%] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* MEDIA */}
              {selectedDesign.type === "video" ? (
                <video
                  src={selectedDesign.src}
                  className="rounded-lg w-full mb-4"
                  autoPlay
                  loop
                  controls
                />
              ) : (
                <img
                  src={selectedDesign.src}
                  alt={selectedDesign.title}
                  className="rounded-lg w-full mb-4"
                />
              )}
              {/* 
              <h2 className="text-white text-2xl font-semibold mb-2">
                {selectedDesign.title}
              </h2> */}

              {/* <p className="text-gray-300 mb-4">
                This is a sample preview. Later you can add a detailed case
                study or description.
              </p> */}

              <button
                className="mt-3 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90"
                onClick={() => setSelectedDesign(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
