import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1><b>ARMSTRONG</b> Omoregie</h1>
        <h5 className='text-light'><b>Frontend</b> Developer</h5>
      </div>
    </header>
  )
}

export default Header;
