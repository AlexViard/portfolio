/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  IoSettingsOutline,
} from 'react-icons/io5';
import './style.scss';

const ThemeSetting = () => (
  <div className="theme-setting">
    <div className="theme-setting-icon">
      <IoSettingsOutline />
    </div>
    <div className="theme-setting-menu">
      <h1 className="theme-setting-menu-title">Thème</h1>
      <div className="theme-setting-menu-color">
        <div className="theme-setting-menu-color-item dark"></div>
        <div className="theme-setting-menu-color-item light"></div>
      </div>
      <h1 className="theme-setting-menu-title">Couleurs</h1>
      <div className="theme-setting-menu-color">
        <div style={{backgroundColor: '#BA2929'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#059040'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#08689E'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#EB7524'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#E7D21C'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#8610B6'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#54350A'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#C1219C'}} className="theme-setting-menu-color-item"></div>
        <div style={{backgroundColor: '#21C1BF'}} className="theme-setting-menu-color-item"></div>
      </div>
    </div>
  </div>
);

export default ThemeSetting;
