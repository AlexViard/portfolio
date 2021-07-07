import React from 'react';
import img from 'src/assets/images/img-works.jpg';
// import PropTypes from 'prop-types';

import './style.scss';

const Works = () => (
  <div className="works">
    <div className="works-content">
      <h1 className="works-title">Mes projets</h1>
      <div className="works-containers">

        <div className="works-container">
          <div className="works-container-filter">
            <h2 class="works-container-title">Le premier titre</h2>
          </div>
        </div>

        <div className="works-container">
          <div className="works-container-filter"></div>
        </div>

        <div className="works-container">
          <div className="works-container-filter"></div>
        </div>

        <div className="works-container">
          <div className="works-container-filter"></div>
        </div>

        <div className="works-container">
          <div className="works-container-filter"></div>
        </div>

        <div className="works-container">
          <div className="works-container-filter"></div>
        </div>
      </div>
    </div>
  </div>
);

Works.propTypes = {

};

Works.defaultProps = {

};

export default Works;
