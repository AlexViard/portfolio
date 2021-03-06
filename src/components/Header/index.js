import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Aos from 'aos';
import Typical from 'react-typical';
import 'aos/dist/aos.css';
import AlexLaptop from 'src/assets/images/alex-laptop.png';
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
    <div className="header" id="home">
      <div className="header-content">
        <div className="header-content-intro" data-aos="fade-up">
          <h1 className="header-content-title">Alex Viard</h1>
          <h2 className="header-content-subtitle">Développeur{' '}
            <Typical
              loop={1}
              wrapper="b"
              steps={['Fullstack Javascript', 1200]}
            />
          </h2>
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
          <NavHashLink smooth to="/#contact" className="header-content-btn">Me contacter</NavHashLink>
        </div>
        <div className="header-content-img" data-aos="fade-up">
          <img src={AlexLaptop} alt="" />
        </div>
      </div>
      <div className="header-scrool-down" />
    </div>
  );
};

export default Header;
