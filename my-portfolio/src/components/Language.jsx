import React, { useEffect, useRef } from 'react'
import '../css/Languages.css'

const Language = () => {
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

  const languages = [
    { name: 'Hindi', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'C1 Proficiency', proficiency: 90 },
    { name: 'Russian', level: 'B1 Proficiency', proficiency: 60 }
  ]

  return (
    <div className="section language-section" ref={sectionRef}>
      <h1 className="section-title">Language Proficiency</h1>
      <div className="language-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <h3 className="language-name">{lang.name}</h3>
            <p className="language-level">{lang.level}</p>
            <div className="proficiency-bar-container">
              <div 
                className="proficiency-bar" 
                style={{ width: `${lang.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Language