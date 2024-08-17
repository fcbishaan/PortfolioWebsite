import React, { useEffect, useRef } from 'react';
import '../css/Skills.css';

const Skills = () => {
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

  const skills = [
    { name: 'HTML', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Express', proficiency: 70 },
    { name: 'Node.js', proficiency: 70 },
    { name: 'MongoDB', proficiency: 65 },
  ];

  const learningSkills = [
    { name: 'Swift', proficiency: 30 },
    { name: 'Go', proficiency: 25 },
  ];

  return (
    <div className="section skills-section" ref={sectionRef}>
      <h1 className="section-title">Technical Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="proficiency-bar-container">
              <div 
                className="proficiency-bar" 
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <span className="proficiency-text">{skill.proficiency}%</span>
          </div>
        ))}
      </div>
      <h2 className="subsection-title">Currently Learning</h2>
      <div className="skills-grid">
        {learningSkills.map((skill, index) => (
          <div key={index} className="skill-card learning">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="proficiency-bar-container">
              <div 
                className="proficiency-bar" 
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <span className="proficiency-text">Learning</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
