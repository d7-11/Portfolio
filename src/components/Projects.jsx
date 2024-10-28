import React from 'react';
import './Projects.css';
import headerLine from '../img/headerLine.png';
import projectsImg1 from '../img/projectsImg1.png';
import projectsImg2 from '../img/projectsImg2.png';
import projectsImg3 from '../img/projectsImg3.png';

function Projects() {
  return (
    <section className="projects">
      <h1><img src={headerLine} alt="line" className="projects-header-img" />Projects</h1>
      <p className="projects-intro">
        Here are a few projects I’ve worked on, ranging from company landing pages to custom applications.
      </p>
      
      <div className="projects-list">
        {/* Project 1 */}
        <div className="project">
          
          <div className="project-details">
            <h3>Company Landing Page</h3>
            <p>
              Designed and developed a responsive landing page for a company to enhance their online presence. 
              The project focused on clean design, usability, and mobile-first development.
            </p>

            <a href="https://d7-11.github.io/Green-pallete/" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <img src={projectsImg1} alt="Landing Page Project" className="project-image" />
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="project">
          
          <div className="project-details">
            <h3>Fitness App for Startup</h3>
            <p>
              Built an internal fitness form application using Google Apps Script. 
              Integrated Google AppScript for user input and generated automated responses.
            </p>
            <a href="https://forms.gle/WK2sT8iAoRfGMGzm9" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <img src={projectsImg2} alt="Fitness App Project" className="project-image" />
          </div>
        </div>
        
        {/* Project 3 - Fitness Platform */}
        <div className="project">
          <div className="project-details">
            <h3>Fitness Platform</h3>
            <p>
              Developed a comprehensive fitness platform that includes workout tracking, nutrition planning, 
              and user engagement features. Built with React and integrated APIs for personalized fitness recommendations.
            </p>
            <a href="https://github.com/your-username/fitness-platform" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <img src={projectsImg3} alt="Fitness App Project" className="project-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
