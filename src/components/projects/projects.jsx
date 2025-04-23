import React from "react";
import { FiDownloadCloud, FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import WishCraft from "../../assets/WishCraft.png";
const Projects = () => {
    // Sample project data - replace with your actual projects
    const featuredProjects = [
        {
            title: "WishCraft - Personalized Birthday Greetings",
            description: "WishCraft is an interactive birthday wishes website designed to create joyful, personalized greetings for friends and family. It features playful animations, heartfelt messages, and an engaging UI to make the user feel celebrated. This project showcases creativity, responsive design, and frontend development skills, perfect for personal occasions or gifting experiences.",
            technologies: ["React", "JavaScript(ES6)", "HTML5&CSS3", "Tailwind CSS","Lottie/JSON animations","Netlify "],
            image: WishCraft,
            github: "https://github.com/tmax-kiran/birthday-template",
            liveDemo: "https://birthday-template-new.netlify.app/"
        },
        {
            title: "Task Management App",
            description: "A collaborative task tracking application with real-time updates and team management features.",
            technologies: ["React", "TypeScript", "Firebase", "Material UI"],
            image: "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/username/project2",
            liveDemo: "https://project2.example.com"
        },
        {
            title: "Data Visualization Dashboard",
            description: "An interactive dashboard displaying complex datasets with customizable charts and filters.",
            technologies: ["D3.js", "React", "Express", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/username/project3",
            liveDemo: "https://project3.example.com"
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/username/project1",
            liveDemo: "https://project1.example.com"
        },
        {
            title: "Task Management App",
            description: "A collaborative task tracking application with real-time updates and team management features.",
            technologies: ["React", "TypeScript", "Firebase", "Material UI"],
            image: "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/username/project2",
            liveDemo: "https://project2.example.com"
        },
        {
            title: "Data Visualization Dashboard",
            description: "An interactive dashboard displaying complex datasets with customizable charts and filters.",
            technologies: ["D3.js", "React", "Express", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/username/project3",
            liveDemo: "https://project3.example.com"
        },

    ];



    return (
        <div className="home-bottom-container">
            <div className="background-gradient"></div>

            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="section-title">
                Featured <span className="highlight">Projects</span>
            </h1>

            <div className="projects-grid">
                {featuredProjects.map((project, index) => (
                    <div className="project-card glass-effect" key={index} data-aos="flip-left"
                        data-aos-delay={index * 100}
                        data-aos-duration="1000">
                        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                        <FiGithub size={20} />
                                    </a>
                                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-link">
                                        <FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
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
    );
};

export default Projects;