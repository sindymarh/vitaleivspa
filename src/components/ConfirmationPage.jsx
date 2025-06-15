import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const ConfirmationPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('confirmation.title')}</h2>
        {data ? (
          <div style={styles.details}>
            <p><strong>{t('confirmation.name')}:</strong> {data.name}</p>
            <p><strong>{t('confirmation.date')}:</strong> {data.date}</p>
            <p><strong>{t('confirmation.time')}:</strong> {data.timeBlock}</p>
          </div>
        ) : (
          <p>{t('confirmation.no_data')}</p>
        )}
        <Link to="/">
          <button style={styles.button}>{t('confirmation.back_home')}</button>
        </Link>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333'
  },
  details: {
    marginBottom: '20px',
    fontSize: '16px',
    color: '#555',
    textAlign: 'left'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default ConfirmationPage;

