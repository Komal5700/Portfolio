import React from 'react';
import './Footer.css';
import { MailOutlined, PhoneOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons"
// import { FiMail, FiPhone, FiCopy, FiGithub, FiTwitter } from 'react-icons/fi';
// import { SiStackoverflow } from 'react-icons/si';

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <footer className="footer" id='/contact'>

      <div style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        <div className="contact-row">
          <a><MailOutlined /></a>
          <strong className="contact-text">komals.5700@gmail.com</strong>
        </div>

        <div className="contact-row">
          <a><PhoneOutlined /></a>
          <strong className="contact-text">+91 9828368262</strong>
        </div>
      </div>


      <p className="find-me-text">You may also find me on these platforms!</p>

      <div style={{ marginTop: "1rem", fontSize: 24, cursor: "pointer" }}>
        <a href="https://github.com/Komal5700" aria-label="GitHub" style={{ color: "inherit", textDecoration: "none", marginRight: 10 }}><GithubOutlined /></a>
        <a href="https://www.linkdin.com/in/komsl-saini-739038221/" aria-label="Dribbble" style={{ color: "inherit", textDecoration: "none" }}><LinkedinOutlined /></a>
      </div>

      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* <FiGithub size={24} /> */}
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* <FiTwitter size={24} /> */}
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* <SiStackoverflow size={24} /> */}
        </a>
      </div>

      <div className="footer-copyright">
        © 2023 | Designed and coded with <span style={{ color: 'red' }}>♥</span> by Komal Saini
      </div>
    </footer>
  );
};

export default Footer;
