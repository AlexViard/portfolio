import React, { useState } from 'react';
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

const CurvedNavBar = () => {
  const [menuItems, setMenuItems] = useState({
    home: true,
    aboutMe: false,
    experience: false,
    skills: false,
    works: false,
    opinions: false,
    contact: false,
  });

  return (
    <nav className="curved">
      <ul className="curved-list">
        <li className={`curved-list-item ${menuItems.home && 'active'}`}>
          <IoHomeOutline />
        </li>
        <li className={`curved-list-item ${menuItems.aboutMe && 'active'}`}>
          <IoPersonOutline />
        </li>
        <li className={`curved-list-item ${menuItems.experience && 'active'}`}>
          <IoSchoolOutline />
        </li>
        <li className={`curved-list-item ${menuItems.skills && 'active'}`}>
          <IoCodeSlashOutline />
        </li>
        <li className={`curved-list-item ${menuItems.works && 'active'}`}>
          <IoLayersOutline />
        </li>
        <li className={`curved-list-item ${menuItems.opinions && 'active'}`}>
          <IoChatbubblesOutline />
        </li>
        <li className={`curved-list-item ${menuItems.contact && 'active'}`}>
          <IoPaperPlaneOutline />
        </li>
      </ul>
    </nav>
  );
};

export default CurvedNavBar;
