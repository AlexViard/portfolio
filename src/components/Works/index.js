import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Work from './Work';
import './style.scss';

const Works = ({ repositories }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="works" id="works">
      <div className="works-content">
        <h1 className="works-title" data-aos="fade-up">Mes projets</h1>

        <nav className="works-nav" data-aos="slide-down">
          <ul className="works-categories">
            <li className="works-category">Tout les projets</li>
            <li className="works-category">Projets Personels</li>
          </ul>
        </nav>

        <div className="works-containers">
          {repositories.map((elem) => (
            <Work {...elem} img={`https://raw.githubusercontent.com/AlexViard/${elem.name}/master/img/img-portfolio.png`} />
          ))}
        </div>
      </div>
    </div>
  );
};

Works.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default Works;
