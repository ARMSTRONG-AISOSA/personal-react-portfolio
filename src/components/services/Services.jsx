import React from 'react';
import './services.css';
import { GrFormCheckmark } from "react-icons/gr";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DIGITAL SERVICES</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              {/* <p>Web Ad</p> */}
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              {/* <p>Social Media Management.</p> */}
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              {/* <p>Graphics Design.</p> */}
            </li>
            
          </ul>
        </article>
        {/* DIGITAL SERVICES */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Business Optimised website</p>
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Personal Portfolio for Professionals </p>
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Responsive Web Design Platforms</p>
            </li>
            {/* #4 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>SEO & Design Principle for Performance</p>
            </li>
            {/* #5 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>User & Performance Optismed Websites</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>BUSINESS DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Pitch Deck Creation</p>
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Business Plans</p>
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Business Proposals</p>
            </li>
          </ul>
        </article>
        {/* END OF BUSINESS DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services
