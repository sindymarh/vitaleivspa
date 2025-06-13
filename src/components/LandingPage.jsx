// LandingPage.jsx

import React from 'react';
import './LandingPage.css';  // Si tienes estilos personalizados

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img 
        src="/img/logo192.jpeg"  // Aquí la imagen del logo, asegúrate de tenerla en /public/img/
        alt="Vitale IV Spa Logo" 
        style={{ width: '220px', marginTop: '10px' }}
      />
      <h1>Welcome to Vitale IV Spa</h1>
      <p>Your path to rejuvenation and wellness with vitamin infusions.</p>
      <a href="/book">
        <button>Book Your Session</button>
      </a>
    </div>
  );
}

export default LandingPage;
