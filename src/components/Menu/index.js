import React from 'react';
import './style.scss';
import { NavHashLink } from 'react-router-hash-link';

// import des Icons
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoLayersOutline,
  IoChatbubblesOutline,
  IoPaperPlaneOutline,
  IoLogoReact,
} from 'react-icons/io5';

const Menu = () => (
  <div className="menu">
    <div className="menu-logo">
      <IoLogoReact className="menu-logo-icon" />
      <p>Alex</p>
    </div>
    <nav className="menu-nav">
      <ul>
        <NavHashLink
          smooth
          to="/#home"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoHomeOutline />
          <p className="menu-nav-li-link">Accueil</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#aboutMe"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoPersonOutline />
          <p className="menu-nav-li-link">À propos de moi</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#experience"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoSchoolOutline />
          <p className="menu-nav-li-link">Experiences</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#skills"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoCodeSlashOutline />
          <p className="menu-nav-li-link">Compétences</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#works"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoLayersOutline />
          <p className="menu-nav-li-link">Projets</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#opinions"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoChatbubblesOutline />
          <p className="menu-nav-li-link">Avis</p>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#contact"
          className="menu-nav-li"
          activeClassName="selected"
        >
          <IoPaperPlaneOutline />
          <p className="menu-nav-li-link">Me contacter</p>
        </NavHashLink>
      </ul>
    </nav>
    <p className="menu-copyright">Alex Viard © copyright 2021</p>
  </div>
);

export default Menu;
