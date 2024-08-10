import React from 'react'
import './../css/Header.css'
import me from './../Image/me.png'
const Header = () => {
  return (
    <div className="header-container">
      <span className='portfolio'>Ishaan Vashishth</span>
      <div className="intro-section">
        <div className="image-container">
          <img src={me} alt="Ishaan Vashishth" />
        </div>
        <div className="intro-text">
          <h2 >Full Stack Developer</h2>
          <p>Hi, I'm passionate about creating innovative 
            web applications and solving complex problems through code.</p>
        </div>
      </div>
    </div>
  )
}

export default Header