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

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, voluptates ipsum distinctio iusto quam atque, ducimus dicta facere fuga illo amet? Ex reprehenderit voluptatem ut eaque facere odio dolore necessitatibus!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
