import React from 'react';
import { GraduationCap, Lightbulb, Code, Users, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formateur IA",
      description: "Formations personnalisées en intelligence artificielle",
      features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consultant IA",
      description: "Audit et solutions IA sur mesure",
      features: ["Audit stratégique", "Roadmap IA", "PoC", "Déploiement"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Créateur Web",
      description: "Sites web intégrés avec l'IA",
      features: ["Design moderne", "Performance", "SEO optimisé", "Maintenance"],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, text: "Accompagnement personnalisé" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Retour sur investissement rapide" },
    { icon: <Shield className="w-6 h-6" />, text: "Solutions sécurisées et fiables" }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            De la formation à la création, nous vous accompagnons dans votre transformation digitale avec l'intelligence artificielle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-6">
                <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300`}>
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 backdrop-blur-sm border border-purple-800/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pourquoi choisir <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Visiontek</span> ?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <p className="text-white font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;