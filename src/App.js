import React from 'react';
import './App.css';
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App body">
      <Banner />
      <Projects />
      <Skills/>
      <Work/>
      <Contact />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
