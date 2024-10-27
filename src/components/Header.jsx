import React from "react";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import './Header.css';
import headerLine from '../img/headerLine.png';

function Header() {
    return (
        <header className="header">
            
                <Link to="/">
                    <div className="logo">
                        <img src={headerLine} alt="line" className="header-text-item header-img" />
                        <div className="header-text">
                            <p className="header-text-item header-name">Daniela Panasenko</p>
                            <p className="header-text-item header-job">FRONT-END DEVELOPER</p>
                        </div>
                    </div>
                </Link>
            
            <Menu />
        </header>
    );
}

export default Header;