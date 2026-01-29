import React from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      {/* Skip Navigation Link - Accessibilité WCAG AA */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Aller au contenu principal
      </a>
      
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/logo-dark.jpg" alt="Visiontek - Expert IA et Consulting" className="h-16 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Menu principal">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' 
                  ? 'text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Accueil
            </Link>
            <Link 
              to="/formations" 
              className={`transition-colors ${
                location.pathname === '/formations' 
                  ? 'text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Formations
            </Link>
            <Link 
              to="/consulting-ia" 
              className={`transition-colors ${
                location.pathname === '/consulting-ia' 
                  ? 'text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Consulting IA
            </Link>
            <Link 
              to="/createur-web" 
              className={`transition-colors ${
                location.pathname === '/createur-web' 
                  ? 'text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Créateur Web
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:contact@visiontek.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Envoyer un email à contact@visiontek.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="tel:+33600000000" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Appeler le +33 6 00 00 00 00"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2" role="navigation" aria-label="Menu mobile">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === '/' 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Accueil
              </Link>
              <Link 
                to="/formations" 
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === '/formations' 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Formations
              </Link>
              <Link 
                to="/consulting-ia" 
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === '/consulting-ia' 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Consulting IA
              </Link>
              <Link 
                to="/createur-web" 
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === '/createur-web' 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Créateur Web
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </Link>
              <div className="flex space-x-4 px-3 py-2">
                <a href="mailto:contact@visiontek.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="tel:+33600000000" className="text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;