import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const NotFound = () => (
  <div className="background-img">
    <div className="space" />
    <div className="wrapper">
      <div className="img-wrapper">
        <span>44</span>
      </div>
      <p>La page que vous essayez de rechercher a été <br /> déplacée vers un autre univers. </p>
      <Link className="btn" to="/">Retour à l'accueil</Link>
    </div>
  </div>
);

export default NotFound;
