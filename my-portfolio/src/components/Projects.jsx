import React, { useEffect, useRef } from 'react';
import './../css/Projects.css';
import jobImage from "../assets/job.png";
import ecommerceImage from "../assets/E-commerce.jpeg";
import scrumImage from "../assets/scrum.png";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const projects = [
    {
      title: "Job Portal",
      description: "A MERN stack job portal application with features for job posting, application management, and user authentication. Implements RESTful API design and MongoDB for data storage.",
      image: jobImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      link: "https://github.com/fcbishaan/mern-Job-Portal"
    },
    {
      title: "Scrum iOS App",
      description: "An iOS application for Scrum project management, built with Swift. Features include sprint planning, task assignment, and progress tracking.",
      image: scrumImage,
      technologies: ["Swift", "UIKit", "Core Data", "SwiftUI"],
      link: "https://github.com/fcbishaan/scrum-IOS-app"
    },
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with features like product catalog, shopping cart, and user authentication. Built with modern web technologies.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
      link: "https://github.com/fcbishaan/E-commerce-website"
    }
  ];

  return (
    <div className="section projects-section" ref={sectionRef}>
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
