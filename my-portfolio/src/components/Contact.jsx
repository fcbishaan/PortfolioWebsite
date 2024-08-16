import React, { useEffect, useRef } from 'react';
import './../css/Contact.css';

const Contact = () => {
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
    <div className="section contact-section" ref={sectionRef}>
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-content">
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="mailto:ivashishth0@gmail.com" className="email-link">ivashishth0@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;