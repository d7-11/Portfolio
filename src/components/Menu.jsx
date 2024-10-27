import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Menu.css';
import { Sling as Hamburger } from 'hamburger-react';

function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current path
   
    const toggleMenu = () => {
        setIsOpen(!isOpen);  // Toggle menu visibility
    };
    const closeMenu = () => {
        setIsOpen(false);  // Close the menu
    };

    return (
        <div className="menu">
            <button onClick={toggleMenu} className="hamburger-btn">
                <Hamburger toggled={isOpen} toggle={setIsOpen} color="#0050FF" />
            </button>
            <nav className={`nav-menu ${isOpen ? 'nav-menu--open' : ''}`}>
                <span className="close-menu" onClick={closeMenu}></span>
                <ul className="menu__list">
                    <li>
                        <Link 
                            to="/" 
                            onClick={closeMenu}
                            className={location.pathname === "/" ? "current-page" : ""}
                        >ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects" 
                            onClick={closeMenu}
                            className={location.pathname === "/projects" ? "current-page" : ""}
                        >PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/resume" 
                            onClick={closeMenu}
                            className={location.pathname === "/resume" ? "current-page" : ""}
                        >RESUME
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contacts" 
                            onClick={closeMenu}
                            className={location.pathname === "/contacts" ? "current-page" : ""}
                        >CONTACTS
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
