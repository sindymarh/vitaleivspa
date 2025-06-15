import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const { name, email, date, timeBlock } = state || {};

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Booking Confirmed ✅</h2>
        <p>Thank you, <strong>{name}</strong>!</p>
        <p>Your session is booked for <strong>{date}</strong> at <strong>{timeBlock}</strong>.</p>
        <p>We’ll contact you at <strong>{email}</strong> for confirmation.</p>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px'
  },
  card: {
    maxWidth: '500px',
    width: '100%',
    background: '#e9f9ee',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#2e7d32',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  title: {
    marginBottom: '20px'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none'
  }
};

export default ConfirmationPage;


