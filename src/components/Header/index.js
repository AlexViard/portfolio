import React from 'react';
// import PropTypes from 'prop-types';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from 'react-icons/io5';
import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-intro">
      <h1 className="header-title">Alex Viard</h1>
      <h2 className="header-subtitle">Développeur Fullstack JavaScript</h2>
      <ul className="header-list">
        <li className="header-list-icon">
          <a href="https://www.instagram.com/alex.devv_" target="_blank" rel="noreferrer">
            <IoLogoInstagram />
          </a>
        </li>
        <li className="header-list-icon">
          <a href="https://github.com/AlexViard" target="_blank" rel="noreferrer">
            <IoLogoGithub />
          </a>
        </li>
        <li className="header-list-icon">
          <a href="https://www.linkedin.com/in/alex-viard/" target="_blank" rel="noreferrer">
            <IoLogoLinkedin />
          </a>
        </li>
        <li className="header-list-icon">
          <a href="mailto:alex-viard@hotmail.fr">
            <IoMailOutline />
          </a>
        </li>
      </ul>
      <div className="header-btn">Me contactez</div>
    </div>
    <div className="header-img">
      <img src="" alt="" />
    </div>
  </div>
);

// Header.propTypes = {

// };

// Header.defaultProps = {

// };

export default Header;
