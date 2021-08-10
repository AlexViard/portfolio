import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from 'react-icons/io5';
import './style.scss';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-intro" data-aos="fade-up">
          <h1 className="header-content-title">Alex Viard</h1>
          <h2 className="header-content-subtitle">Développeur Fullstack JavaScript</h2>
          <ul className="header-content-list">
            <li className="header-content-list-icon">
              <a href="https://www.instagram.com/alex.devv_" target="_blank" rel="noreferrer">
                <IoLogoInstagram />
              </a>
            </li>
            <li className="header-content-list-icon">
              <a href="https://github.com/AlexViard" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </li>
            <li className="header-content-list-icon">
              <a href="https://www.linkedin.com/in/alex-viard/" target="_blank" rel="noreferrer">
                <IoLogoLinkedin />
              </a>
            </li>
            <li className="header-content-list-icon">
              <a href="mailto:alex-viard@hotmail.fr">
                <IoMailOutline />
              </a>
            </li>
          </ul>
          <div className="header-content-btn">Me contactez</div>
        </div>
        <div className="header-content-img" data-aos="fade-up">
          <img src="" alt="" />
        </div>
      </div>

      <div className="header-scrool-down" />
    </div>
  );
};

export default Header;
