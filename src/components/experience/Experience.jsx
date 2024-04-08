import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* #7 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #7 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GIT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* #8 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
          </div>
        </div>

        {/* Business Development */}
        <div className="experience__bizdev">
          <h3>Business Development</h3>
          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Documentation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Business Plan</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Pitch Deck</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Financials</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Proposals</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* #6 */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Facilitation</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
