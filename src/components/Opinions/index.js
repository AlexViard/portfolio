/* eslint-disable react/self-closing-comp */

import React from 'react';
// import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import './style.scss';
import julienAnthony from 'src/assets/images/julien-anthony.png';
import jlPerez from 'src/assets/images/jl-perez.jpeg';
import philipeGnansounou from 'src/assets/images/philipe-gnansounou.jpeg';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/core';

SwiperCore.use([Navigation, EffectCoverflow, Pagination]);

const Opinions = () => (
  <div className="opinions">
    <div className="opinions-content">
      <h1 className="opinions-title">Avis</h1>

      <div className="opinions-container">
        <Swiper
          navigation
          effect="coverflow"
          centeredSlides
          slidesPerView={window.innerWidth < 600 ? 1 : 3}
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide-img" style={{ backgroundImage: `url(${philipeGnansounou})` }}>
            </div>
            <p className="swiper-slide-reviews">J’ai rencontré Alex pendant la piscine d’entré de l’école 42. Son envie d’apprendre ainsi que sa détermination font de lui un excellent développeur.</p>
            <h2 className="swiper-slide-author">Philippe Gnansounou</h2>
            <p className="swiper-slide-job-city">Développeur chez SensAI - Paris</p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-img" style={{ backgroundImage: `url(${jlPerez})` }}>
            </div>
            <p className="swiper-slide-reviews">"Alex est un développeur très ambitieux. Capable de trouver la solution à n'importe quel problème, il m'a apprit beaucoup de choses. Je le recommande de tout cœur."</p>
            <h2 className="swiper-slide-author">Jean-Luc Perez</h2>
            <p className="swiper-slide-job-city">Developpeur Web - Perpignan</p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-img" style={{ backgroundImage: `url(${julienAnthony})` }}>
            </div>
            <p className="swiper-slide-reviews">"Très disponible et à l'écoute, Alex a su comprendre et adapter mes envies. De plus, les délais sont scrupuleusement respecté et son professionnalisme est a souligné."</p>
            <h2 className="swiper-slide-author">Julien Anthony</h2>
            <p className="swiper-slide-job-city">Fondateur Passe D - Montréal</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
);

Opinions.propTypes = {

};

Opinions.defaultProps = {

};

export default Opinions;
