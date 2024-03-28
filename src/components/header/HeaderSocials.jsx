import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/armstrong-omoregie-02367a271/" target='_blank'><FaLinkedin /></a>
            <a href="https://twitter.com/BossStrung" target='_blank'><FaSquareXTwitter /></a>
            <a href="https://github.com/ARMSTRONG-AISOSA" target='_blank'><FaGithubSquare /></a>
        </div>
    )
}

export default HeaderSocials
