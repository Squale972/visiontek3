import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    consent_rgpd: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validation frontend
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error('Veuillez entrer une adresse email valide');
      }
      
      // Connexion Supabase et insertion
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: `Demande ${formData.service || 'générale'}${formData.company ? ' - ' + formData.company : ''}`,
        message: formData.message
      };

      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      );
      
      const { data, error } = await supabase
        .from('contacts')
        .insert([submissionData])
        .select();
      
      if (error) {
        throw error;
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        consent_rgpd: false
      });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Erreur formulaire:', error);
      alert(`Erreur: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Démarrons votre <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projet IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment l'intelligence artificielle peut transformer votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé!</h3>
                <p className="text-gray-300">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service intéressé
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="formation">Formation IA</option>
                    <option value="consulting">Consulting IA</option>
                    <option value="web">Création Web</option>
                    <option value="all">Solution complète</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                {/* Consentement RGPD */}
                <div>
                  <label className="flex items-start space-x-2 text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent_rgpd"
                      checked={formData.consent_rgpd}
                      onChange={(e) => setFormData({...formData, consent_rgpd: e.target.checked})}
                      className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <span className="text-sm">
                      J'accepte que mes données soient traitées conformément à la politique de confidentialité*
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer votre demande</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact direct</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">contact@visiontek.com</p>
                    <p className="text-gray-400 text-sm">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Téléphone</h4>
                    <p className="text-gray-300">+33 6 00 00 00 00</p>
                    <p className="text-gray-400 text-sm">Lun-Ven, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Localisation</h4>
                    <p className="text-gray-300">Paris, France</p>
                    <p className="text-gray-400 text-sm">Interventions partout en France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-800/30">
              <h3 className="text-xl font-bold text-white mb-3">Besoin d'un conseil rapide?</h3>
              <p className="text-gray-300 mb-6">
                Planifiez un appel découverte gratuit de 30 minutes pour discuter de votre projet.
              </p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Planifier un appel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;