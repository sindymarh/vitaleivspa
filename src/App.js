import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './components/ConfirmationPage';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;

