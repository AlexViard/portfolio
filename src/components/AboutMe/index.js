import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  FcTodoList,
  FcComboChart,
  FcCommandLine,
  FcHome,
} from 'react-icons/fc';
import imgAlex from 'src/assets/images/alex-cartoon.png';
import './style.scss';

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="about_me" id="aboutMe">
      <div className="about_me-page">
        <h1 className="about_me-title" data-aos="fade-up">À propos de moi</h1>

        <div className="about_me-content">
          <div className="about_me-content-img">
            <img src={imgAlex} alt="Alex cartoon" />
          </div>
          <div className="about_me-content-container" data-aos="fade-left">
            <p className="about_me-content-container-text">
              Après avoir acquis des compétences en autodidacte,
              puis en premiere année a l'université (Maths/Informatique),
              j'ai par la suite, élargi mes compétences dans l'informatique avec une formation
              Ruby and Rails (The Hacking Project) qui m'a permis de
              me lancer en freelance pendant 1 an. Après ça, j'ai décidé de
              changer entièrement de technologie et de me tourner vers
              le grand JavaScript, avec l'école O'clock pour me specialiser vers React.js !
            </p>
            <a href="https://drive.google.com/file/d/1aA2W6grWg6GKP0felykfNC2Y4u9zt1Xb/view" target="_blank" rel="noreferrer">
              <div className="about_me-content-container-btn">Télécharger CV</div>
            </a>
          </div>
        </div>
        <ul className="about_me-infobar" data-aos="fade-up">
          <li className="about_me-infobar-info">
            <a href="#" className="about_me-infobar-info-icon">
              <FcCommandLine />
            </a>
            <p className="about_me-infobar-info-text">
              Que ce soit le matin,
              après-midi, le soir ou même la nuit, je
              suis toujours opérationnel pour avancer
              sur un projet web!
            </p>
          </li>
          <li className="about_me-infobar-info">
            <a href="#" className="about_me-infobar-info-icon">
              <FcTodoList />
            </a>
            <p className="about_me-infobar-info-text">
              J'adore résoudre des problèmes, bon j'avoue
              que plusieurs heures me font perdre quelques
              cheveux.. Mais je trouve toujours la bonne solution!
            </p>
          </li>
          <li className="about_me-infobar-info">
            <a href="#" className="about_me-infobar-info-icon">
              <FcHome />
            </a>
            <p className="about_me-infobar-info-text">
              Je vis actuellement vers Montpellier, mais
              je peux changer de ville pour un poste,
              j'adore voyager et tout reprendre à zéro.
            </p>
          </li>
          <li className="about_me-infobar-info">
            <a href="#" className="about_me-infobar-info-icon">
              <FcComboChart />
            </a>
            <p className="about_me-infobar-info-text">
              Je passe mon temps à lire de la doc, en pratiquant,
              ou par les newsletters.. Ce qui me permet d'être à
              la pointe de la technologie.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
