import React from "react";
import { FiDownloadCloud, FiGithub, FiExternalLink } from "react-icons/fi";
import WishCraft from "../../assets/WishCraft.png";

const Projects = () => {
    const featuredProjects = [
        {
            title: "WishCraft - Personalized Birthday Greetings",
            description:
                "WishCraft is an interactive birthday wishes website designed to create joyful, personalized greetings. It features playful animations, heartfelt messages, and an engaging UI.",
            technologies: ["React", "JavaScript(ES6)", "HTML5&CSS3", "Tailwind CSS", "Lottie/JSON animations", "Netlify"],
            image: WishCraft,
            github: "https://github.com/tmax-kiran/birthday-template",
            liveDemo: "https://birthday-template-new.netlify.app/",
        },
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "",
            liveDemo: "",
            statusNote: "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
            isInProgress: true,
        },
        {
            title: "Task Management App",
            description: "A collaborative task tracking application with real-time updates and team management features.",
            technologies: ["React", "TypeScript", "Firebase", "Material UI"],
            image: "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "",
            liveDemo: "",
            statusNote: "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
            isInProgress: true,

        },
        {
            title: "Data Visualization Dashboard",
            description: "An interactive dashboard displaying complex datasets with customizable charts and filters.",
            technologies: ["D3.js", "React", "Express", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "",
            liveDemo: "",
            statusNote: "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
            isInProgress: true,

        },
        {
            title: "Single Page Landing Page",
            description:
                "A responsive and visually engaging single-page website designed to highlight key features or offerings.",
            technologies: ["React", "HTML", "CSS", "JavaScript"],
            image: "https://images.unsplash.com/photo-1612425626229-632fab8bfc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZSUyMGhvbWUlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
            github: "",
            liveDemo: "",
            statusNote: "Status: In Progress 🚧\n(GitHub integration pending due to technical issues.)",
            isInProgress: true,

        },
    ];

    return (
        <>

            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="section-title">
                Featured <span className="highlight">Projects</span>
            </h1>
            <div className="home-bottom-container">
                <div className="background-gradient"></div>

                <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="section-title">
                    Featured <span className="highlight">Projects</span>
                </h1>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <div
                            className={`project-card glass-effect ${project.isInProgress ? "dimmed" : ""}`}
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
                                            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                                <FiGithub size={20} />
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-link">
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
                                            <span key={idx} style={{ display: "block" }}>{line}</span>
                                        ))}
                                    </p>
                                )}

                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span className="tech-tag" key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Projects;
