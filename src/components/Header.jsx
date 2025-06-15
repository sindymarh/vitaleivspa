// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <header style={styles.header}>
      <div>
        <Link to="/" style={getLinkStyle(location.pathname === '/')}>
	  {t('header.home')}
	</Link>
	<Link to="/book" style={getLinkStyle(location.pathname === '/book')}>
	  {t('header.book')}
	</Link>
      </div>

      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        style={styles.select}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc'
  },
  select: {
    fontSize: '14px',
    padding: '6px',
    borderRadius: '4px'
  }
};

const getLinkStyle = (active) => ({
  marginRight: '15px',
  textDecoration: 'none',
  color: active ? '#4CAF50' : '#333',
  fontWeight: active ? 'bold' : 'normal'
});

export default Header;


