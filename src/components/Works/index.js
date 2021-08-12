import React, { useEffect } from 'react';
import {
  FiLink,
  FiMoreHorizontal,
} from 'react-icons/fi';
// import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

const Works = () => {
  const divStyle = {
    backgroundColor: '#50BBD7',
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="works">
      <div className="works-content">
        <h1 className="works-title" data-aos="fade-up">Mes projets</h1>

        <nav className="works-nav" data-aos="fade-down">
          <ul className="works-categories">
            <li className="works-category">Tout les projets</li>
            <li className="works-category">Projets Personels</li>
          </ul>
        </nav>

        <div className="works-containers">

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Widget Meteo</h2>
              <div className="works-container-icon">
                <a href="#">
                  <FiLink />
                </a>
                <a href="#">
                  <FiMoreHorizontal />
                </a>
              </div>
            </div>
          </div>
          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Days in Paris</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">La passe D</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">To do list</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Convertisseur</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
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
