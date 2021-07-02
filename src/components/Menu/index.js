import React from 'react';
import './style.scss';

// import des Icons
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoLayersOutline,
  IoChatbubblesOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

const Menu = () => (
  <div className="menu">
    <div className="menu-logo">Logo</div>
    <nav className="menu-nav">
      <ul>
        <li className="menu-nav-li">
          <IoHomeOutline />
          <a className="menu-nav-li-link">Accueil</a>
        </li>
        <li className="menu-nav-li">
          <IoPersonOutline />
          <a className="menu-nav-li-link">À propos de moi</a>
        </li>
        <li className="menu-nav-li">
          <IoSchoolOutline />
          <a className="menu-nav-li-link">Experiences</a>
        </li>
        <li className="menu-nav-li">
          <IoCodeSlashOutline />
          <a className="menu-nav-li-link">Compétences</a>
        </li>
        <li className="menu-nav-li">
          <IoLayersOutline />
          <a className="menu-nav-li-link">Projets</a>
        </li>
        <li className="menu-nav-li">
          <IoChatbubblesOutline />
          <a className="menu-nav-li-link">Avis</a>
        </li>
        <li className="menu-nav-li">
          <IoPaperPlaneOutline />
          <a className="menu-nav-li-link">Me contacter</a>
        </li>
      </ul>
    </nav>
    <p className="menu-copyright">Alex Viard © copyright 2021</p>
  </div>
);

export default Menu;
