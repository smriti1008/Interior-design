import React from 'react';
import './Footer.css';
import { LogoTwitter, LogoPinterest, LogoFacebook, LogoInstagram } from "react-ionicons";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="container">
        {/* Brand Column */}
        <div className="brandColumn">
          <a href="/" className="brandTitle">
            Oasis <em>Interiors</em>
          </a>
          <p className="brandDesc">
            Crafting bespoke sanctuaries that blend timeless elegance with modern
            functionality. Your vision, elevated by our expertise.
          </p>
          <div className="socialIcons">
            <a href="#" className="socialIcon" aria-label="Instagram"><LogoInstagram color="currentColor" width="18px" /></a>
            <a href="#" className="socialIcon" aria-label="Pinterest"><LogoPinterest color="currentColor" width="18px" /></a>
            <a href="#" className="socialIcon" aria-label="Facebook"><LogoFacebook color="currentColor" width="18px" /></a>
            <a href="#" className="socialIcon" aria-label="Twitter"><LogoTwitter color="currentColor" width="18px" /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footerContent">
          <h3>Contact Us</h3>
          <div className="contactInfo">
            <p>123 Luxury Avenue<br/>Design District, NY 10012</p>
            <p>studio@oasisinteriors.com</p>
            <p>+1 (212) 555-0198</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footerContent">
          <h3>Explore</h3>
          <ul className="list">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#collections">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contactUs">Get in Touch</a></li>
          </ul>
        </div>

        {/* Legal/Help */}
        <div className="footerContent">
          <h3>Support</h3>
          <ul className="list">
            <li><a href="#">Client Portal</a></li>
            <li><a href="#">Design Process</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="bottomBar">
        <p>&copy; {new Date().getFullYear()} Oasis Interiors. All rights reserved.</p>
        <div className="legalLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
