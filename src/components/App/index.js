// == Import npm
import React from 'react';

// == Import components
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';
import AboutMe from 'src/components/AboutMe';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Header />
    <AboutMe />
  </div>
);

// == Export
export default App;
