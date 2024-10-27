import React from 'react';
import telegram from '../assets/icons/telegram.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';

function SocialLinks() {
    return(
        <div className='social-links'>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <img src={telegram} alt="Telegram" width="24" height="24" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={github} alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" width="24" height="24" />
            </a>
        </div>
    );
}

export default SocialLinks;