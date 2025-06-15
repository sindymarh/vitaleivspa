import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noreferrer"
      style={styles.button}
    >
      💬
    </a>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    textAlign: 'center',
    fontSize: '30px',
    lineHeight: '60px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textDecoration: 'none',
    zIndex: 1000
  }
};

export default WhatsAppButton;
