import React, { useEffect, useState } from 'react';
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
  AiOutlineLoading,
} from 'react-icons/ai';

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  ToastContainer,
  toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const sendEmail = (e) => {
    setLoader(true);
    e.preventDefault();
    emailjs.sendForm('service_htgcwa6', 'template_w1uls6h', e.target, 'user_320dn2BuKuORXomQQQTH1')
      .then(() => {
        toast.success('Votre message a bien été envoyé.');
      })
      .catch(() => {
        toast.error('Une erreur inattendue s\'est produite. veuillez réessayer ultérieurement ');
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const sendEmailTest = (e) => {
    setLoader(true);
    e.preventDefault();
    setTimeout(() => {
      setLoader(false);
    }, 2000);
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

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <h1 className="contact-content-title" data-aos="fade-up">Me contacter</h1>

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
            <form className="contact-form" onSubmit={sendEmail} data-aos="fade-left">
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

              <textarea name="content" placeholder="Message" rows="13" required />

              <div className="btn">
                {loader && (
                  <AiOutlineLoading className="btn-loader" />
                )}
                {!loader && (
                  <input type="submit" value="Envoyer" disabled={loader} />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
