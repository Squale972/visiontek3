import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Accueil = () => {
  return (
    <>
      <section aria-labelledby="hero-title">
        <Hero />
      </section>
      <section aria-labelledby="services-title">
        <Services />
      </section>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
};

export default Accueil;