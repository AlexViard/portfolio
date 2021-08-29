import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Work from './Work';
import './style.scss';

const Works = ({ repositories }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [inputValue, setInputValue] = useState('');
  // const [filterRepos, setFilterRepos] = useState(repositories);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getFilterRepositories = () => (
    repositories.filter((elem) => (
      elem.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
  );

  return (
    <div className="works" id="works">
      <div className="works-content">
        <h1 className="works-title" data-aos="fade-up">Mes projets</h1>

        <div className="works-search" data-aos="slide-down">
          <input type="text" value={inputValue} placeholder="Rechercher un projet..." onChange={handleChange} />
        </div>

        <div className="works-containers">
          {getFilterRepositories().map((elem) => (
            <Work key={elem.name} {...elem} img={`https://raw.githubusercontent.com/AlexViard/${elem.name}/master/img/img-portfolio.png`} />
          ))}
        </div>
      </div>
    </div>
  );
};

Works.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default Works;
