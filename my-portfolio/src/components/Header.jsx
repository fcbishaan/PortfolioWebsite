import React, { useState, useEffect } from 'react';
import './../css/Header.css';
import me from './../Image/me.png';

const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Namaste! 🙏',
    'Welcome to my portfolio page',
    'My name is Ishaan Vashishth',
    'Wanna know more about me?',
    'But promise me first you will offer me a job after reading it 😂 just kidding',
    'Just scroll'
  ];
  const [animationsComplete, setAnimationsComplete] = useState(false);

  useEffect(() => {
    if (textIndex < texts.length) {
      const interval = setInterval(() => {
        setCurrentText(texts[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => clearInterval(interval);
    } else {
      setAnimationsComplete(true);
    }
  }, [textIndex, texts]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={`full-screen-header ${animationsComplete ? 'scrolled' : ''}`}>
        <span className="portfolio">{currentText}</span>
        {animationsComplete && (
          <div className="scroll-cue" onClick={handleScrollDown}>
            <span>↓ Just Scroll ↓</span>
          </div>
        )}
      </div>
      <div className="header-container">
        <div className="intro-section">
          <div className="image-container">
            <img src={me} alt="Ishaan Vashishth" />
          </div>
          <div className="intro-text">
            <h2>Full Stack Developer</h2>
            <p>
              Hi, I'm passionate about creating innovative web applications and solving complex problems through code.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
