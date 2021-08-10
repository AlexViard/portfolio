import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  SiRedux,
  SiPostgresql,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
} from 'react-icons/si';

import { FaDatabase } from 'react-icons/fa';
import { BsFileEarmarkCode, BsChatDots } from 'react-icons/bs';
import { GiProgression } from 'react-icons/gi';
import './style.scss';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="skills">
      <div className="skills-content">
        <h1 className="skills-title" data-aos="fade-up">Mes competences</h1>
        <div className="skills-containers">
          <div className="skills-left">
            <div className="skills-left-container">

              <div className="skills-left-content" data-aos="fade-right">
                <div className="skills-left-icon_title">
                  <BsFileEarmarkCode className="skills-left-icon" />
                  <p className="skills-left-title">Front-End</p>
                </div>
                <ul className="skills-left-list">
                  <li>- Maquetter une application</li>
                  <li>- Réaliser une interface utilisateur responsive statique ou dynamique</li>
                  <li>
                    - Réaliser une interface utilisateur
                    avec une solution de gestion de contenu
                  </li>
                </ul>
              </div>

              <div className="skills-left-content" data-aos="fade-right">
                <div className="skills-left-icon_title">
                  <FaDatabase className="skills-left-icon" />
                  <p className="skills-left-title">Back-End</p>
                </div>
                <ul className="skills-left-list">
                  <li>- Créer une base de données</li>
                  <li>- Développer les composants d'accès aux données</li>
                  <li>- Développer la partie back-end d'une application web ou mobile</li>
                </ul>
              </div>

              <div className="skills-left-content" data-aos="fade-right">
                <div className="skills-left-icon_title">
                  <BsChatDots className="skills-left-icon" />
                  <p className="skills-left-title">Communication</p>
                </div>
                <ul className="skills-left-list">
                  <li>- Faire preuves de minutie</li>
                  <li>- Être à l'ecoute et s'adapter</li>
                  <li>- Avoir le sens des priorités pour savoir planifier les taches</li>
                </ul>
              </div>

              <div className="skills-left-content" data-aos="fade-right">
                <div className="skills-left-icon_title">
                  <GiProgression className="skills-left-icon" />
                  <p className="skills-left-title">Qualité Web</p>
                </div>
                <ul className="skills-left-list">
                  <li>- Prendre en compte la diversité et les exigeances des utilisateurs</li>
                  <li>- Connaître les bonnes pratiques, leur conception et leur utilisation</li>
                  <li>- Utiliser une check-list qualité Web</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="skills-right" data-aos="fade-left">

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiHtml5 className="skills-right-icon skills-html" />
                <span className="skills-right-text">HTML</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="85%" style={{ width: '85%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiCss3 className="skills-right-icon skills-css" />
                <span className="skills-right-text">CSS</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="70%" style={{ width: '70%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiJavascript className="skills-right-icon skills-js" />
                <span className="skills-right-text">JavaScript</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="80%" style={{ width: '80%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiReact className="skills-right-icon skills-react" />
                <span className="skills-right-text">React.js</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="85%" style={{ width: '85%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiRedux className="skills-right-icon skills-redux" />
                <span className="skills-right-text">Redux</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="75%" style={{ width: '75%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiNodeDotJs className="skills-right-icon skills-node" />
                <span className="skills-right-text">Node.js</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="80%" style={{ width: '80%' }} /></div>
            </div>

            <div className="skills-right-bar">
              <div className="skills-right-info">
                <SiPostgresql className="skills-right-icon skills-postgresql" />
                <span className="skills-right-text">PostgreSQL</span>
              </div>
              <div className="skills-right-progress-line"><span data-content="70%" style={{ width: '70%' }} /></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {

};

Skills.defaultProps = {

};

export default Skills;
