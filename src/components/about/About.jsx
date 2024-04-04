import React from 'react';
import './about.css';
import ME from '../../assets/me-about-photo.png';
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Learn More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>+2 Years Working</small>
            </article>

            <article className="about__card">
            <LuUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>5+ Businesses</small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>+5 Completed</small>
            </article>
          </div>

          <p>I am a self-driven person who enjoys challenges that present growth opportunities. I constantly work to better myself in whatever capacity or role I occupy and am eager to make significant contributions to whatever team or organization I find myself. As a Front-end Web Developer, I excel at translating design concepts into seamless and responsive web experiences. Driven by a pursuit of excellence, I approach each project with meticulous attention and a dedication to delivering results that exceed expectations. Beyond technical proficiency, I bring a collaborative spirit and a penchant for problem-solving to every team I work with. Let's build something extraordinary together.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
