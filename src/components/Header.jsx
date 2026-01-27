import React from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/logo-dark.jpg" alt="Visiontek" className="h-16 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:contact@visiontek.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="tel:+33600000000" className="text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
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
  );
};

export default Header;