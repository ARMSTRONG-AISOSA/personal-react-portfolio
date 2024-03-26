import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
            <a href="https://twitter.com" target='_blank'><FaSquareXTwitter /></a>
            <a href="https://github.com" target='_blank'><FaGithubSquare /></a>
        </div>
    )
}

export default HeaderSocials