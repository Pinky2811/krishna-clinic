import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AppointmentForm from './pages/AppointmentForm';
import Contact from './pages/Contact';
import Admin from './pages/Admin'; // ✅ Use new Admin page instead of AdminAppointments
import FloatingButtons from './components/FloatingButtons'; // ✅ Import it

function App() {
  return (
    <BrowserRouter basename="/krishna-clinic">
    <LanguageProvider>
      <Router>
        {/* Always show header */}
        <Header />
        <FloatingButtons /> {/* ✅ Global floating buttons */}
        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/AppointmentForm" element={<AppointmentForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} /> {/* ✅ New Admin page */}
        </Routes>
      </Router>
    </LanguageProvider>
    </BrowserRouter>

  );
}

export default App;
