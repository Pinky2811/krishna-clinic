import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Only import BrowserRouter
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AppointmentForm from './pages/AppointmentForm';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <BrowserRouter basename="/krishna-clinic"> {/* ✅ Fix starts here */}
      <LanguageProvider>
        <Header />
        <FloatingButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
