import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me-hero.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1><b>ARMSTRONG</b> Omoregie</h1>
        <h5 className='text-light'><b>Frontend</b> Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className='me-img' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
