import React from 'react';
import { FiLink } from 'react-icons/fi';
// import PropTypes from 'prop-types';

import './style.scss';

const Works = () => {
  const divStyle = {
    backgroundColor: '#50BBD7',
  };

  return (
    <div className="works">
      <div className="works-content">
        <h1 className="works-title">Mes projets</h1>

        <nav className="works-nav">
          <ul className="works-categories">
            <li className="works-category">Tout les projets</li>
            <li className="works-category">React</li>
            <li className="works-category">Node.js</li>
            <li className="works-category">Projets Personels</li>
          </ul>
        </nav>

        <div className="works-containers">

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Widget Meteo</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Days in Paris</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">La passe D</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">To do list</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Convertisseur</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Le premier titre</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
