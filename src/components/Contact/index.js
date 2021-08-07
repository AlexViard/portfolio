import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import './style.scss';

const Contact = () => {
  const [message, setMessage] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    content: null,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_htgcwa6', 'template_w1uls6h', e.target, 'user_320dn2BuKuORXomQQQTH1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const map = () => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 43.253790, lng: 2.264710 }}
    />
  );

  const WrappedMap = withScriptjs(withGoogleMap(map));

  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="contact-content-title">Me contactez</h1>

        <div className="contact-content-container">

          <div className="contact-content-container-card">
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>

          <div className="contact-content-container-informations">
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="text" name="firstName" placeholder="Prénom" />
              <input type="text" name="lastName" placeholder="Nom" />
              <input type="email" name="email" placeholder="Email" />
              <input type="number" name="phone" placeholder="Téléphone" />
              <textarea name="content" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
