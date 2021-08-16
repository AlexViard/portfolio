import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoLayersOutline,
  IoChatbubblesOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

import './style.scss';

const CurvedNavBar = () => (
  <nav className="curved">
    <ul className="curved-list">
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#home"
        activeClassName="active"
      >
        <IoHomeOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#aboutMe"
        activeClassName="active"
      >
        <IoPersonOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#experience"
        activeClassName="active"
      >
        <IoSchoolOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#skills"
        activeClassName="active"
      >
        <IoCodeSlashOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#works"
        activeClassName="active"
      >
        <IoLayersOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#opinions"
        activeClassName="active"
      >
        <IoChatbubblesOutline />
      </NavHashLink>
      <NavHashLink
        className="curved-list-item"
        smooth
        to="/#contact"
        activeClassName="active"
      >
        <IoPaperPlaneOutline />
      </NavHashLink>
    </ul>
  </nav>
);

export default CurvedNavBar;
