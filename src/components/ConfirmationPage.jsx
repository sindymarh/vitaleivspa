// ConfirmationPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { date, timeBlock, name, email, phone } = location.state || {};

  return (
    <div className="confirmation-page">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for booking with Vitale IV Spa. Here are the details of your appointment:</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time Block:</strong> {timeBlock}</li>
      </ul>
      <p>We look forward to seeing you!</p>
    </div>
  );
}

export default ConfirmationPage;
