import React from 'react';
import PropTypes from 'prop-types';
import {
  FiLink,
} from 'react-icons/fi';

import './style.scss';
import './languages.scss';

const Work = ({ name, language, img }) => (
  <div className="works-container" style={{ backgroundImage: `url("${img}")` }} data-aos="slide-up">
    <div className="works-container-filter">
      { language && (
        <p className={`works-container-category ${language}`}>{language}</p>
      )}
      <h2 className="works-container-title">{name}</h2>
      <div className="works-container-icon">
        <a href={`https://github.com/AlexViard/${name}`} target="_blank" rel="noreferrer">
          <FiLink />
        </a>
      </div>
    </div>
  </div>
);

Work.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  img: PropTypes.string.isRequired,
};

Work.defaultProps = {
  language: null,
};

export default Work;
