import React from 'react';
import SocialLinks from './SocialLinks';
import "./Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <dl>
                <dt>Call</dt>
                <dd><a href="tel:+35795732278">+35795732278</a></dd>
            </dl>
            <dl>
                <dt>Write</dt>
                <dd><a href="mailto:panasenkodaniela@gmail.com">panasenkodaniela@gmail.com</a></dd>
            </dl>
            <dl>
                <dt>Follow</dt>
                <dd><SocialLinks /></dd>
                <p>© 2024 by Daniela Panasenko</p>
            </dl>
            
        </footer>
    );
}

export default Footer;