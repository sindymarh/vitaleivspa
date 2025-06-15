import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const BookingForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: '',
    timeBlock: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      ...form,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, 'reservations'), reservationData);
      navigate('/confirmation', { state: reservationData });
    } catch (error) {
      console.error('Error saving reservation:', error);
      alert('Error saving reservation. Please try again.');
    }
  };

  return (
    <>
      <div style={styles.wrapper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>{t('booking.title')}</h2>

          <input
            type="text"
            name="name"
            placeholder={t('booking.name')}
            required
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder={t('booking.email')}
            required
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t('booking.phone')}
            required
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
            style={styles.input}
          />
          <select
            name="timeBlock"
            required
            value={form.timeBlock}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">{t('booking.select_time')}</option>
            <option value="Morning">{t('booking.morning')}</option>
            <option value="Afternoon">{t('booking.afternoon')}</option>
            <option value="Evening">{t('booking.evening')}</option>
          </select>

          <button type="submit" style={styles.button}>{t('booking.submit')}</button>
        </form>
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px'
  },
  form: {
    maxWidth: '500px',
    width: '100%',
    background: '#f9f9f9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default BookingForm;

