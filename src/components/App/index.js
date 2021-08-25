// == Import npm
import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
// == Import components
import api from 'src/api';
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
import ThemeSetting from 'src/components/ThemeSetting';

import './styles.scss';

// == Composant
const App = () => {
  const [loader, setLoader] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    setLoader(true);
    try {
      const {data} = await api.get('/users/AlexViard/repos');
      setRepos(data);
      console.log(response.data);
      
    }
    catch (err) {
      console.log(err);
    }
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Menu />
            <ThemeSetting />
            <Header />
            <AboutMe />
            <Experience />
            <Skills />
            <Works repositories={repos} />
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
