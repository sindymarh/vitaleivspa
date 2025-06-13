// BookingForm.jsx

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [timeBlock, setTimeBlock] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      date,
      timeBlock,
      name,
      email,
      phone,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, 'reservations'), reservationData);
      console.log('Reservation saved!');

      // Redirigir a la página de confirmación y pasar los datos
      navigate('/confirmation', { state: reservationData });
    } catch (error) {
      console.error('Error saving reservation:', error);
      alert('Error saving reservation. Please try again.');
    }
  };

  return (
    <div className="booking-form">
      <h1>Book Your Session</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label htmlFor="timeBlock">Select Time Block:</label>
        <select id="timeBlock" value={timeBlock} onChange={(e) => setTimeBlock(e.target.value)} required>
          <option value="">-- Select Time --</option>
          <option value="8:00 AM - 11:00 AM">8:00 AM - 11:00 AM</option>
          <option value="11:00 AM - 2:00 PM">11:00 AM - 2:00 PM</option>
          <option value="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</option>
        </select>

        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
