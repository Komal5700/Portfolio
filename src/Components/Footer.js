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
      <div className="get-in-touch-label">Get in touch</div>
      <p className="message">
        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
      </p>

      {/* <div className="contact-row">
        <a><MailOutlined /></a>
        <strong className="contact-text">komals.5700@gmail.com</strong>
        <FiCopy
          size={20}
          className="copy-icon"
          onClick={() => copyToClipboard('reachsagarshah@gmail.com')}
          title="Copy email"
        />
      </div>

      <div className="contact-row">
        <a><PhoneOutlined /></a>
        <strong className="contact-text">+91 9828368262</strong>
        <FiCopy
          size={20}
          className="copy-icon"
          onClick={() => copyToClipboard('+91 8980500565')}
          title="Copy phone"
        />
      </div> */}

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
        <a href="#" aria-label="GitHub" style={{ color: "inherit", textDecoration: "none", marginRight: 10 }}><TwitterOutlined /></a>
        <a href="#" aria-label="Twitter" style={{ color: "inherit", textDecoration: "none", marginRight: 10 }}><GithubOutlined /></a>
        <a href="#" aria-label="Dribbble" style={{ color: "inherit", textDecoration: "none" }}><LinkedinOutlined /></a>
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
