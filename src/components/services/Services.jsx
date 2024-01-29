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
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #4 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #5 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #4 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #5 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #6 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className="service__list">
            {/* #1 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #2 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #3 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #4 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            {/* #5 */}
            <li>
              <GrFormCheckmark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
