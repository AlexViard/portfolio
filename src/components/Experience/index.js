import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  IoSchoolOutline,
  IoConstructOutline,
} from 'react-icons/io5';

import './style.scss';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="experience">
      <div className="experience-content">
        <h1 className="experience-content-title" data-aos="fade-up">Experience</h1>

        <div className="experience-content-containers">

          <div className="experience-content-container" data-aos="fade-right">

            <ul className="experience-content-list">

              <div className="experience-content-display">
                <IoSchoolOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">O'clock</p>
                  <p className="experience-content-list-formation-subtitle">Formation en télépresentiel - 700 heures intensives</p>
                  <p className="experience-content-list-formation-description">
                    - 4 mois de socle: HTML5 / CSS3 / JavaScript / Nodejs / Postgres <br />
                    - 1 mois de spécialisation: React.js/Redux <br />
                    - 1 mois de project: Days in Paris <br />
                  </p>
                </li>
              </div>

              <div className="experience-content-display">
                <IoSchoolOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">The Hacking Project</p>
                  <p className="experience-content-list-formation-subtitle">Formation à distance en groupe - 12 semaines intensives</p>
                  <p className="experience-content-list-formation-description">
                    - Semaine 1-9: HTML / CSS / Ruby / RubyOnRails /
                    JavaScript / SQL / Git / GitHub <br />
                    - Semaine 10-12: Projet en équipe -> "KitePackers" <br />
                  </p>
                </li>
              </div>

              <div className="experience-content-display">
                <IoSchoolOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">Licence Maths/Informatique</p>
                  <p className="experience-content-list-formation-subtitle">Université - Via Domitia</p>
                  <p className="experience-content-list-formation-description">1er année puis réorientation</p>
                </li>
              </div>

              <span className="experience-content-line" />
            </ul>
          </div>
          <div className="experience-content-container" data-aos="fade-left">
            <ul className="experience-content-list">

              <div className="experience-content-display">
                <IoConstructOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">Développeur Front</p>
                  <p className="experience-content-list-formation-subtitle">
                    O'clock
                  </p>
                  <p className="experience-content-list-formation-description">
                    - Développement Front-End Application Web <br />
                    - Equipe de 4 développeurs / 4 semaines intensives <br />
                    - Application qui permet d'organiser un séjour touristique a Paris. <br />
                  </p>
                </li>
              </div>

              <div className="experience-content-display">
                <IoConstructOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">Développeur FullStack</p>
                  <p className="experience-content-list-formation-subtitle">La passe D</p>
                  <p className="experience-content-list-formation-description">
                    - Développement Fullstack Application web. <br />
                    - Application pour une association concernant le football au Sénégal. <br />
                    - Interface d'administration pour la gestion de projets à annoncer sur
                    la plateforme. <br />
                  </p>
                </li>
              </div>

              <div className="experience-content-display">
                <IoConstructOutline className="experience-content-display-icon" />
                <li className="experience-content-list-formation">
                  <p className="experience-content-list-formation-title">Développeur FullStack</p>
                  <p className="experience-content-list-formation-subtitle">The Hacking Project</p>
                  <p className="experience-content-list-formation-description">
                    - Développement Fullstack Application Web<br />
                    - Equipe de 4 développeurs / 2 semaines intensives<br />
                    - Application d'hébergement avec location de matériel pour le kitesurf<br />
                  </p>
                </li>
              </div>

              <span className="experience-content-line" />
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {

};

Experience.defaultProps = {

};

export default Experience;
