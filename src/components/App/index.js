// == Import npm
import React from 'react';

// == Import components
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';
import AboutMe from 'src/components/AboutMe';
import Experience from 'src/components/Experience';
import Skills from 'src/components/Skills';
import Works from 'src/components/Works';

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
  </div>
);

// == Export
export default App;
