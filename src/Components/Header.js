import React, { useState, useEffect } from "react";
import "./Header.css";
import { saveAs } from "file-saver";
export const handleScroll = (id) => {
  console.log(id, "jnfjenfek")
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
  const [theme, setTheme] = useState('light');

  const downloadCV = () => {
    saveAs("/komal_saini_pdf.pdf", "Komal_Saini_CV.pdf");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <header className="header">
      <div className="header-left">
        <a href="/">Komal</a>
      </div>

      <div className={`header-right ${menuOpen ? "open" : ""}`}>

        <nav className="header-nav">
          <div className="nav-items-wrapper">
            <ul style={{ cursor: "pointer" }}>
              <p onClick={(id) => { handleScroll('/about'); setMenuOpen(false); }}>About</p>
              <p onClick={(id) => { handleScroll('/work'); setMenuOpen(false); }}>Work</p>
              <p onClick={(id) => { handleScroll('/contact'); setMenuOpen(false); }}>Contact</p>
            </ul>
            <button className="download-cv" onClick={() => { downloadCV(); setMenuOpen(false); }}>
              <a href="../../public/komal_saini_pdf.pdf" download style={{ color: 'inherit', textDecoration: 'none' }}>
                Download CV
              </a>
            </button>
            <button
              onClick={toggleTheme}
              style={{
                top: 20,
                right: 20,
                zIndex: 999,
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: theme === 'light' ? '#222' : '#eee',
                color: theme === 'light' ? '#eee' : '#222',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </nav>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

    </header>
  );
};

export default Header;
