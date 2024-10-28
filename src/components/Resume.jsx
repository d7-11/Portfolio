import React from 'react';
import './Resume.css'; // You can style your resume with a separate CSS file
import headerLine from '../img/headerLine.png';

function Resume() {
  return (
    <section className="resume">
      <img src={headerLine} alt="line" className='resume-img' />
      <h1>Resume</h1>

      {/* Skills */}
      <h2>Skills</h2>
      <div className="resume-section">
      <h3>Professional skills</h3>
        <ul>
          <li><img src={headerLine} alt="line" className='resume-img' />Front-End: HTML5, CSS3, JavaScript, React, Responsive Web Design</li>
          <li><img src={headerLine} alt="line" className='resume-img' />Back-End: Node.js, RESTful APIs, MongoDB</li>
          <li><img src={headerLine} alt="line" className='resume-img' />Web Development Tools: Git/GitHub, Figma, Vite</li>
          <li><img src={headerLine} alt="line" className='resume-img' />Testing & Debugging: Proficient in debugging, cross-browser testing, and using Postman for API testing</li>
          <li><img src={headerLine} alt="line" className='resume-img' />Deployment & Optimization: Deploying web applications to cloud servers and optimizing performance</li>
          <li><img src={headerLine} alt="line" className='resume-img' />Professional Practices: Strong foundation in industry standards, including security awareness (e.g., SQL Injection & XSS prevention), clean code</li>
        </ul>
      </div>

      {/* Work Experience */}
      <h2>Work Experience</h2>
      <div className="resume-section">

        <div className="job">
          <h3>Front-End Developer</h3>
          <p>Freelance | Jan 2023 - Present</p>
          <ul>
            <li>
              Developed responsive websites and web applications for clients using
              HTML, CSS, and JavaScript.
            </li>
            <li>
              Collaborated with designers to implement designs from Figma into live websites.
            </li>
            <li>
              Ensured cross-browser compatibility and optimized site performance.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Web Developer</h3>
          <p>Freelance | May 2024 - Sep 2024</p>
          <ul>
            <li>
              Assisted in the development of a React-based dashboard for internal tools, enhancing functionality and usability.
            </li>
            <li>
              Worked on improving website accessibility and performance, achieving faster load times and better SEO results.
            </li>
          </ul>
        </div>
      </div>


      {/* Certifications */}
      <h2>Certifications</h2>
      <div className="resume-section">
        
        <div className="certification">
          <h3>The Complete Web Development Bootcamp (Udemy)</h3>
          <p>A comprehensive course in full-stack development, covering HTML, CSS, JavaScript, React, Node.js, and PostgreSQL.</p>
          <p>Key Skills: Full-stack development, responsive design, project building.</p>
        </div>
        <div className="certification">
          <h3>The Web Developer Bootcamp 2024 (Udemy)</h3>
          <p>Focused on HTML, CSS, JavaScript, React, and MongoDB, with real-world project implementation and deployment techniques.</p>
          <p>Key Skills: Frontend and backend integration, full authentication setup.</p>
        </div>
      </div>

      {/* Education */}
      <h2>Education</h2>
      <div className="resume-section">
      <div className="education">
        <h3>Master's Degree in Management</h3>
        <p>Kharkiv State Academy of Culture</p>
        <p>2011 - 2017</p>
      </div>
    </div>

      {/* Footer */}
      <footer className="resume-footer">
        <p>Want to know more? Check out my <a href="/projects">Projects</a> or <a href="/contact">Contact Me</a>.</p>
      </footer>
    </section>
  );
}

export default Resume;
