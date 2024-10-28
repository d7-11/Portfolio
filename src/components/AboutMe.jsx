import React from "react";
import { Link } from 'react-router-dom';
import './AboutMe.css';
import workspace from '../img/workspace.jpg'; // Ensure the path is correct
import horizontalBorder from "../img/horizontalBorder.png";

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe-content">
                <div className="aboutMe-conteiner">
                <img src={workspace} alt="Daniela Panasenko" className="aboutMe-photo" />
                
                <h1 className="about-name">Daniela Panasenko</h1>
                <img src={horizontalBorder} alt="-" className="horizontalBorder" />
                <h3 className="about-job">FRONT-END DEVELOPER</h3>
                
                <div className="aboutMe-buttons">
                    <Link to="/projects" className="btn-main">Projects</Link>
                    <Link to="/resume" className="btn-border">Resume</Link>
                </div>

                </div>
                <div className="aboutMe-text">
                    <h3>Here's who I am & what I do</h3>
                    <p>I'm a Front-End Developer focused on creating clean, responsive, and user-friendly websites.</p>
                    <p>I turn ideas into engaging digital experiences, crafting seamless designs and interactive interfaces that work flawlessly across all devices.</p>
                </div>
                
            </div>
        </section>
    );
}

export default AboutMe;
