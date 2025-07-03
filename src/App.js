import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/krishna-clinic">
      <LanguageProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Appointment />
        <Contact />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
