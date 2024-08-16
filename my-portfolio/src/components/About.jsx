import React, { useEffect, useRef } from 'react';
import "./../css/About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="section about-section" ref={sectionRef}>
      <div className="about-content">
        <h1 className="section-title">About Me</h1>
        <div className="about-text">
          <p>I am a final-year BSc Software Engineering student with a passion for creating innovative software solutions.</p>
          <p>My expertise includes:</p>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Full-stack development</li>
            <li>UI/UX Design</li>
          </ul>
          <p>I've applied my skills to real-world projects, including an E-commerce website and Job portal website, currently hosted on GitHub.</p>
          <p>My goal is to leverage my technical expertise to contribute to forward-thinking projects in the software development industry.</p>
          <a href={`${process.env.PUBLIC_URL}/Ishaan_vashishth_resume.pdf`} download className="resume-download">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;