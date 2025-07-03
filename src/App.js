import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <LanguageProvider>
      <Header />
      <Home />
      <About />
      <Services />
      <Appointment />
      <Contact />
      </LanguageProvider>
    </>
  );
}

export default App;
