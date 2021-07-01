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
          <IoLogoInstagram />
        </li>
        <li className="header-list-icon">
          <IoLogoGithub />
        </li>
        <li className="header-list-icon">
          <IoLogoLinkedin />
        </li>
        <li className="header-list-icon">
          <IoMailOutline />
        </li>
      </ul>
    </div>
    <div className="header-img">
      <p>img</p>
      <img src="" alt="" />
    </div>
  </div>
);

// Header.propTypes = {

// };

// Header.defaultProps = {

// };

export default Header;
