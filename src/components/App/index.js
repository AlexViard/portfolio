// == Import npm
import React from 'react';

// == Import components
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Header />
  </div>
);

// == Export
export default App;
