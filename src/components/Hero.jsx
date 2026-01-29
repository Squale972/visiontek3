import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe } from 'lucide-react';

const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32" aria-labelledby="hero-title">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Icons - Réduits pour focaliser sur le message */}
        <div className="flex justify-center space-x-6 mb-6 opacity-70">
          <div className="animate-bounce hover:scale-110 transition-transform cursor-default">
            <Brain className="w-12 h-12 text-purple-400" />
          </div>
          <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '100ms' }}>
            <Zap className="w-12 h-12 text-blue-400" />
          </div>
          <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '200ms' }}>
            <Globe className="w-12 h-12 text-indigo-400" />
          </div>
        </div>

        {/* Main Heading - Typographie audacieuse */}
        <h1 id="hero-title" className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            L'Intelligence Artificielle
          </span>
          <br />
          <span className="text-white font-extrabold tracking-tight">au service de votre croissance</span>
        </h1>

        {/* Subtitle - Meilleur contraste et espacement amélioré */}
        <p className="text-xl md:text-2xl text-gray-200 mb-24 max-w-3xl mx-auto leading-relaxed font-medium">
          Transformez vos ambitions en réalité avec des solutions IA sur mesure,
          des formations expertes et une accompagnement personnalisé.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            to="/contact"
            className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Contactez-nous
          </Link>
        </div>

        {/* Stats Section - Plus audacieuses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 mb-20">
          <div className="group text-center p-6 rounded-xl hover:bg-white/5 transition-all cursor-default">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">95%</div>
            <div className="text-gray-300 font-medium">Satisfaction client</div>
          </div>
          <div className="group text-center p-6 rounded-xl hover:bg-white/5 transition-all cursor-default">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-gray-300 font-medium">Projets livrés</div>
          </div>
          <div className="group text-center p-6 rounded-xl hover:bg-white/5 transition-all cursor-default">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-gray-300 font-medium">Support technique</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;