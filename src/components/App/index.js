// == Import npm
import React, { useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
// == Import components
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';
import AboutMe from 'src/components/AboutMe';
import Experience from 'src/components/Experience';
import Skills from 'src/components/Skills';
import Works from 'src/components/Works';
import Opinions from 'src/components/Opinions';
import Contact from 'src/components/Contact';
import Loader from 'src/components/Loader';
import CurvedNavBar from 'src/components/CurvedNavBar';
import NotFound from 'src/components/NotFound';

import './styles.scss';

// == Composant
const App = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Menu />
            <Header />
            <AboutMe />
            <Experience />
            <Skills />
            <Works />
            <Opinions />
            <Contact />
            <CurvedNavBar />
          </Route>
          <NotFound />
        </Switch>
      </div>
      )}
    </>
  );
};

// == Export
export default App;
