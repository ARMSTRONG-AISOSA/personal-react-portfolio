import React from 'react';
import './footer.css';
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ARMSTRONG</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FiLinkedin /></a>
        <a href="https://www.instagram.com/omoregiearmstrong/" target='_blank'><FaInstagram /></a>
        <a href="https://twitter.com/BossStrung" target='_blank'><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <b>ARMSTRONG.</b> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
