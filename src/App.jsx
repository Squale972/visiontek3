import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Formations from './pages/Formations';
import ConsultingIA from './pages/ConsultingIA';
import CreateurWeb from './pages/CreateurWeb';
import Contact from './components/Contact';

// Composant pour défiler vers le haut lors de la navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  console.log('App component rendered');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/consulting-ia" element={<ConsultingIA />} />
          <Route path="/createur-web" element={<CreateurWeb />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;