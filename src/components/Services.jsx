import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Lightbulb,
  Code,
  Brain,
  Zap,
  Shield,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Target,
  MonitorSpeaker
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formation Numérique et IA",
      description: "Transformez vos compétences avec l'intelligence artificielle et le développement digital",
      features: [
        "Expertise IA & Efficacité Opérationnelle",
        "Développement Web IA-assisté",
        "Solutions Office & Digital Skills",
        "Infrastructure IT & Cloud"
      ],
      color: "from-blue-600 to-cyan-600",
      colorIcon: "text-blue-400",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
      borderColor: "border-blue-700/30",
      floatingIcon: <Brain className="w-6 h-6 text-blue-400 animate-bounce" />,
      highlights: [
        "Cursus évolutif de 7h à 50h+",
        "Parcours adapté à chaque niveau",
        "ROI rapide & transformation métier",
        "Conformité RGPD intégrée"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consultant IA",
      description: "Audit stratégique et solutions IA sur mesure pour maximiser votre ROI",
      features: [
        "Audit IA 'Radar 360' Offert",
        "Prototype 'Impact Immédiat' 14j",
        "Industrialisation & Scalabilité",
        "Dashboard ROI en temps réel"
      ],
      color: "from-purple-600 to-pink-600",
      colorIcon: "text-purple-400",
      bgGradient: "from-purple-900/30 to-pink-900/30",
      borderColor: "border-purple-700/30",
      floatingIcon: <Zap className="w-6 h-6 text-purple-400 animate-bounce" />,
      highlights: [
        "Productivité x2 à x5 garantie",
        "Réduction coûts jusqu'à 60%",
        "Sécurité & RGPD natifs",
        "Premiers résultats en 14 jours"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Créateur Web",
      description: "Applications AI-natives : sites intelligents qui pilotent votre croissance",
      features: [
        "Audit 5P (Purpose/People/Process/Platform/Performance)",
        "Maquette interactive 72h",
        "Stack AI-native React/Node.js/Supabase",
        "Optimisation GEO (moteurs génératifs)"
      ],
      color: "from-indigo-600 to-purple-600",
      colorIcon: "text-indigo-400",
      bgGradient: "from-indigo-900/30 to-purple-900/30",
      borderColor: "border-indigo-700/30",
      floatingIcon: <Shield className="w-6 h-6 text-indigo-400 animate-bounce" />,
      highlights: [
        "Sites proactifs vs réactifs",
        "Personnalisation temps réel",
        "Optimisation conversion continue",
        "Hébergement souverain UE"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      text: "Accompagnement personnalisé",
      description: "Expert dédie pour votre transformation"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      text: "Retour sur investissement rapide",
      description: "ROI mesurable en moins de 60 jours"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      text: "Solutions sécurisées et fiables",
      description: "Sécurité by design & conformité RGPD"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Hiérarchie renforcée */}
        <div className="text-center mb-28">
          {/* Floating Icons Animation */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '100ms' }}>
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '200ms' }}>
              <Shield className="w-8 h-8 text-indigo-400" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nos <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-semibold leading-relaxed">
            De la formation à la création, nous vous accompagnons dans votre transformation digitale avec l'intelligence artificielle.
          </p>
        </div>

        {/* Services Grid - Micro-interactions */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>

              {/* Icon with Animation */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2">
                  {service.floatingIcon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Highlights */}
              <div className={`bg-gradient-to-r ${service.bgGradient} rounded-xl p-4 mb-6 border ${service.borderColor}`}>
                <div className="space-y-2">
                  {service.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${service.colorIcon} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-6 relative z-10">
                <Link
                  to={
                    service.title === "Formation Numérique et IA" ? "/formations" :
                    service.title === "Consultant IA" ? "/consulting-ia" :
                    service.title === "Créateur Web" ? "/createur-web" :
                    "/formations"
                  }
                  className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-16 backdrop-blur-sm border border-purple-800/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pourquoi choisir <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Visiontek</span> ?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <p className="text-white font-semibold mb-2">{benefit.text}</p>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;