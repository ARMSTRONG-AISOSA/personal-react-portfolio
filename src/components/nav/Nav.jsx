import React from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav
      ('#home')} className={activeNav === '#home' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav
      ('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={() => setActiveNav
      ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoDocumentTextOutline /></a>
      <a href="#services" onClick={() => setActiveNav
      ('#services')} className={activeNav === '#services' ? 'active' : ''} ><MdOutlineHomeRepairService /></a>
      <a href="#contact" onClick={() => setActiveNav
      ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine /></a>
    </nav>
  )
}

export default Nav
