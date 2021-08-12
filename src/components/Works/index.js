import React, { useEffect } from 'react';
import Modal from 'react-modal';
import {
  FiLink,
  FiMoreHorizontal,
} from 'react-icons/fi';
// import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

Modal.setAppElement('#root');

const Works = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Config Modal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStylesModal = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const divStyle = {
    backgroundColor: '#50BBD7',
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="works">
      <div className="works-content">
        <h1 className="works-title" data-aos="fade-up">Mes projets</h1>

        <nav className="works-nav" data-aos="fade-down">
          <ul className="works-categories">
            <li className="works-category">Tout les projets</li>
            <li className="works-category">React</li>
            <li className="works-category">Node.js</li>
            <li className="works-category">Projets Personels</li>
          </ul>
        </nav>

        <div className="works-containers">

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Widget Meteo</h2>
              <div className="works-container-icon">
                <a href="#">
                  <FiLink />
                </a>
                <a href="#">
                  <FiMoreHorizontal onClick={openModal} />
                </a>
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStylesModal}
            contentLabel="Example Modal"
          >
            <div className="modal-img"></div>
            <div className="modal-description">
              <div className="modal-description-devlopment">
                <h1>Days in Paris</h1>
                <p>Développement de la plateforme « Les Mills Traning Day », ayant pour objectif la mise en avant des instructeurs / trainers Les Mills.</p>
              </div>
              <div className="modal-description-info">
                <p>Année : 2020</p>
                <p>Categories : developpement Web</p>
              </div>
            </div>
          </Modal>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Days in Paris</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">La passe D</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">To do list</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Convertisseur</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>

          <div className="works-container" data-aos="fade-up">
            <div className="works-container-filter">
              <p className="works-container-category" style={divStyle}>React</p>
              <h2 className="works-container-title">Le premier titre</h2>
              <a href="#">
                <FiLink className="works-container-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
