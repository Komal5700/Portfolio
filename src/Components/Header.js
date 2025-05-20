

import React, { useState } from "react";
import "./Header.css";

export const  handleScroll = (id) => {
  console.log(id,"jnfjenfek")
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <a href="/">komal</a>
      </div>

      <div className={`header-right ${menuOpen ? "open" : ""}`}>

        <nav className="header-nav">
          <div className="nav-items-wrapper">

            <ul>
              {/* <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
              <p  onClick={(id) => handleScroll('/about')}> About</p>
              <p  onClick={(id) => handleScroll('/work')}> Work</p>
              <p  onClick={(id) => handleScroll('/contact')}> Contact</p>
            </ul>
            <button className="download-cv" onClick={() => setMenuOpen(false)}>Download CV</button>
          </div>
        </nav>

      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
      </button>
    </header>
  );
};

export default Header;
