import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoThumbnail from "./VideoThumbnail";
// Image imports
import WishCraft from "../../assets/WishCraft.png";
import CozyBites from "../../assets/CozyBites.png";
import DRrmock from "../../assets/DRrmock.jpg";
import Portfolioherosection from "../../assets/Portfolioherosection.png";
import Furniterhero from "../../assets/Furniterhero.png";
import BurgerPoster from "../../assets/BurgerPoster.png";
import BiriyaniPoster from "../../assets/BiriyaniPoster.png";
import PongalFestival from "../../assets/PongalFestival.png";
import Banner from "../../assets/Banner.png";
import Home from "../../assets/Home.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Accordion from "./Accordion";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("uiux");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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


  // UI/UX TAB DATA
  const uiuxData = [
    { title: "Doctor Reservation App Mockup", type: "image", src: DRrmock },
    {
      title: "Portfolio Hero Section Design",
      type: "image",
      src: Portfolioherosection,
    },
    { title: "Furniture Hero Section", type: "image", src: Furniterhero },
    { title: "Furniture Hero Section", type: "image", src: Home },
  ];

  // GRAPHIC DESIGN TAB DATA (videos inside public/videos/)
  const graphicData = [
    {
      title: "New Year Wishes Poster",
      type: "video",
      src: "/videos/NewYearPost.mp4",
    },
    { title: "Soft Drinks Poster", type: "video", src: "/videos/DRINKS.mp4" },
    {
      title: "New Year Animation",
      type: "video",
      src: "/videos/Newyearwish.mp4",
    },
    {
      title: "Drink Motion Poster",
      type: "video",
      src: "/videos/Cocacolawithice.mp4",
    },
    {
      title: "Festival Greetings Poster",
      type: "video",
      src: "/videos/Greetings.mp4",
    },
    {
      title: "Coke Splash Animation",
      type: "video",
      src: "/videos/CokeDrinks.mp4",
    },
    { title: "Burger Poster", type: "image", src: BurgerPoster },
    {
      title: "Coffee Animation Poster",
      type: "video",
      src: "/videos/NewCoffee.mp4",
    },
    { title: "Biriyani Poster", type: "image", src: BiriyaniPoster },
    { title: "Pongal Festival Poster", type: "image", src: PongalFestival },
    { title: "Festival Banner Design", type: "image", src: Banner },
  ];

  const calcParallax = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
       
        <Accordion title="UI/UX & Graphic Design Projects">
          <div className="tabs-container mt-10">
            <div className="flex gap-4 justify-center mb-8">
              <button
                className={`tab-btn ${
                  activeTab === "uiux" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("uiux")}
              >
                Graphic Design
              </button>

              <button
                className={`tab-btn ${
                  activeTab === "graphic" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("graphic")}
              >
                UI/UX Design
              </button>
            </div>

            {/* CONTENT */}
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
                        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                        transition: "transform 0.15s ease-out",
                      }}
                    >
                      <div
                        className="apple-shine"
                        style={{
                          left: cursorPos.x - 150,
                          top: cursorPos.y - 150,
                        }}
                      ></div>

                      {/* VIDEO OR IMAGE */}
                      {item.type === "video" ? (
                        <div className="relative h-[250px] w-full">
                          <VideoThumbnail
                            src={item.src}
                            loading="lazy"
                            // fallback={BurgerPoster}
                          />

                          {/* Play Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="video-indicator text-white text-4xl">
                              ▶
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.src}
                          className="rounded-lg w-full"
                          loading="lazy"
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
        </Accordion>

        {/* POPUP MODAL */}
        <AnimatePresence>
          {selectedDesign && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 inset-0 flex justify-center items-center 
bg-black/60 backdrop-blur-md z-[9999]"
              onClick={() => setSelectedDesign(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-lg w-[100%] max-h-[80vh] 
                overflow-y-auto modal-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedDesign.type === "video" ? (
                  <video
                    src={selectedDesign.src}
                    className="rounded-lg w-full"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={selectedDesign.src}
                    className="rounded-lg w-full"
                    loading="lazy"
                  />
                )}

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

        <Accordion title="Featured Projects">
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div
                className={`project-card glass-effect ${
                  project.isInProgress ? "dimmed" : ""
                }`}
                key={index}
                // data-aos="flip-left"
                // data-aos-delay={index * 100}
                // data-aos-duration="1000"
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
        </Accordion>
      </div>
    </>
  );
};

export default Projects;
