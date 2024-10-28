import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scroll from './components/scroll';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

const isProduction = window.location.hostname === 'd7-11.github.io';

function App() {
  return (
    <Router basename={isProduction ? '/Portfolio' : ''}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Scroll showBelow={250} />
      <Footer />
    </Router>
  );
}

export default App;
