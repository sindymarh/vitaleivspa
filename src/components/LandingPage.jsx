import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from './Header';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img 
          src={process.env.PUBLIC_URL + '/img/logo192.png'} 
          alt="Vitale IV Spa Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>{t('welcome')}</h1>
        <p style={styles.description}>{t('description')}</p>
        <Link to="/book">
          <button style={styles.button}>{t('book')}</button>
        </Link>
      </div>
      <footer style={styles.footer}>
        <p>{t('contactUs')}: <a href="mailto:sindymarh@gmail.com">contact@vitaleivspa.com</a></p>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>
          © {new Date().getFullYear()} Vitale IV Spa. All rights reserved.
        </p>
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
  }
};

export default LandingPage;


