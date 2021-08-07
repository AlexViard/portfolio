import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="contact-content-title">Me contactez</h1>

        <div className="contact-content-container">
          <div className="contact-content-container-card"></div>
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
