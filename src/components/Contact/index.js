import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineForm,
} from 'react-icons/ai';

import {
  ToastContainer,
  toast,
  Zoom,
  Bounce,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_htgcwa6', 'template_w1uls6h', e.target, 'user_320dn2BuKuORXomQQQTH1')
      .then(() => {
        console.log('OK');
        toast.success('Votre message a bien été envoyé.');
      }, () => {
        console.log('ERROR');
        toast.error('Une erreur inattendue s\'est produite. veuillez réessayer ultérieurement ');
      });
  };

  const map = () => (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 43.253790, lng: 2.264710 }}
      />
      <Marker
        position={{
          lat: 43.253790,
          lng: 2.264710,
        }}
      />
    </>
  );

  const WrappedMap = withScriptjs(withGoogleMap(map));

  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="contact-content-title">Me contacter</h1>

        <div className="contact-content-container">

          <div className="contact-content-container-card">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%', borderRadius: '20px' }} />}
            />
          </div>

          <div className="contact-content-container-informations">
            <ToastContainer />
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="row-input">
                  <AiOutlineUser className="icon" />
                  <input type="text" name="name" placeholder="Nom complet" required />
                </div>
                <div className="row-input">
                  <AiOutlineMail className="icon" />
                  <input type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="input">
                <AiOutlineForm className="icon" />
                <input type="text" name="subject" placeholder="Sujet" required />
              </div>

              <textarea name="content" placeholder="Message" rows="10" required />

              <div className="btn">
                <input type="submit" value="Envoyer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
