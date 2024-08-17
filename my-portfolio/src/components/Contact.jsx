import React, { useEffect, useRef } from 'react';
import './../css/Contact.css';

const Contact = () => {
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
  }, []); // Empty dependency array


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