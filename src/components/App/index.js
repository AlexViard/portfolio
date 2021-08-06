// == Import npm
import React from 'react';

// == Import components
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';
import AboutMe from 'src/components/AboutMe';
import Experience from 'src/components/Experience';
import Skills from 'src/components/Skills';
import Works from 'src/components/Works';
import Opinions from 'src/components/Opinions';
import Contact from 'src/components/Contact';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Header />
    <AboutMe />
    <Experience />
    <Skills />
    <Works />
    <Opinions />
    <Contact />
  </div>
);

// == Export
export default App;
