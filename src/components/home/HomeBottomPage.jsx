import React from "react";
import { FiDownloadCloud, FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { Button } from "@mui/material";
import "./Home.css";
const resumeURL = "https://drive.google.com/file/d/1ahsxf-lCTFqqF5amadW83EXtsNSWt8G5/view?usp=sharing";

const HomeBottomPage = () => {
  // Sample project data - replace with your actual projects
  // const featuredProjects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
  //     technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  //     image: "https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     github: "https://github.com/username/project1",
  //     liveDemo: "https://project1.example.com"
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "A collaborative task tracking application with real-time updates and team management features.",
  //     technologies: ["React", "TypeScript", "Firebase", "Material UI"],
  //     image: "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     github: "https://github.com/username/project2",
  //     liveDemo: "https://project2.example.com"
  //   },
  //   {
  //     title: "Data Visualization Dashboard",
  //     description: "An interactive dashboard displaying complex datasets with customizable charts and filters.",
  //     technologies: ["D3.js", "React", "Express", "PostgreSQL"],
  //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     github: "https://github.com/username/project3",
  //     liveDemo: "https://project3.example.com"
  //   }
  // ];

  // Career milestones - replace with your actual experience
  const careerHighlights = [
    {
      year: "2018-2021",
      position: "Junior Executive Trainee",
      company: "Manufacuting industry",
      description: "Led day-to-day operations in the warehouse and stores, ensuring accurate inventory tracking and timely material flow. Developed strong leadership and organizational skills before transitioning to IT."
    },
    {
      year: "2021",
      position: "Intern Software Engineer",
      company: "TechnomaX Systems",
      description: "Part of a team developing React-based web apps, focusing on UI implementation and performance optimization."
    },
    {
      year: "2022-2025",
      position: "Junior Software Engineer",
      company: "TechnomaX Systems",
      description: "Led a small team and independently developed full-fledged web applications using React. Took initiative in learning and applying UI/UX and graphic design to enhance overall product quality."
    },
    
  ];

  return (
    <div className="home-bottom-container">
      <div className="background-gradient"></div>

      {/* <h1 data-aos="fade-down"
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
      </div> */}

      <h1 data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="section-title career-title">
        My Professional <span className="highlight">Journey</span>
      </h1>

      <div className="timeline-container">
        <div className="timeline">
          {careerHighlights.map((item, index) => (
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content glass-effect">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-position">{item.position}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="cta-section glass-effect">
        <h2 className="cta-title">Interested in working together?</h2>
        <p className="cta-text">Check out my full portfolio or download my resume to learn more about my skills and experience.</p>
        <div className="cta-buttons">
          <a href={resumeURL} target="_blank" rel="noreferrer" className="cta-link">
            <Button variant="contained" color="success" endIcon={<FiDownloadCloud />} className="cta-button">
              Download Resume
            </Button>
          </a>
          <Button variant="outlined" color="primary" endIcon={<FiCode />} className="cta-button">
            View All Projects
          </Button>
        </div>
      </div>


    </div>
  );
};

export default HomeBottomPage;