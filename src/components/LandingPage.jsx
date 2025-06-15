// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
{/*import Header from './Header';*/}

const LandingPage = () => {
  return (
    <div style={styles.wrapper}>
    {/* <Header /> */}
      <div style={styles.container}>
        <img 
          src={process.env.PUBLIC_URL + '/img/logo192.png'} 
          alt="Vitale IV Spa Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>Welcome to Vitale IV Spa</h1>
        <p style={styles.description}>Your path to rejuvenation and wellness with vitamin infusions.</p>
        <Link to="/book">
          <button style={styles.button}>Book Your Session</button>
        </Link>
      </div>

      <footer style={styles.footer}>
        <p>Contact us: <a href="mailto:contact@vitaleivspa.com">contact@vitaleivspa.com</a></p>
        <div style={styles.socials}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a> |
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> Facebook</a> |
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"> WhatsApp</a>
        </div>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>© {new Date().getFullYear()} Vitale IV Spa. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between'
  },
  container: {
    padding: '30px 20px',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center'
  },
  logo: {
    width: '60%',
    maxWidth: '220px',
    margin: '20px auto'
  },
  title: {
    fontSize: '1.8rem',
    margin: '20px 0 10px'
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    borderTop: '1px solid #ccc'
  },
  socials: {
    marginTop: '10px'
  }
};

export default LandingPage;

