// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <img
          src={process.env.PUBLIC_URL + '/img/logo192.png'}
          alt="Logo"
          style={styles.logo}
        />
        <span style={styles.title}>Vitale IV Spa</span>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/book" style={styles.link}>Book</Link>
        {/* Puedes agregar más secciones si quieres */}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ddd',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333'
  },
  nav: {
    display: 'flex',
    gap: '15px'
  },
  link: {
    textDecoration: 'none',
    color: '#4CAF50',
    fontWeight: 'bold'
  }
};

export default Header;
