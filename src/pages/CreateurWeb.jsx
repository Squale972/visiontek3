import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Clock, TrendingUp, Users, Target, ChevronDown, ChevronUp, Check, Star, ArrowRight as ArrowIcon } from 'lucide-react';
import Footer from '../components/Footer';

const CreateurWeb = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Comment garantissez-vous la sécurité des données ?",
      answer: "Chiffrement bout-en-bout, hébergement souverain UE, cloisonnement strict, zéro entraînement sur vos données."
    },
    {
      question: "L'IA peut-elle halluciner ?",
      answer: "Nous utilisons des architectures RAG + vérification multi-agents pour réduire les hallucinations de plus de 95%."
    },
    {
      question: "Quel est le délai moyen de mise en production ?",
      answer: "De 2 à 6 semaines selon la complexité, grâce à notre stack AI-native."
    },
    {
      question: "Mon équipe peut-elle reprendre la main ?",
      answer: "Oui. Interfaces no-code + documentation + transfert de compétences."
    }
  ];

  const audit5P = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Purpose",
      subtitle: "Pourquoi ?",
      description: "Quel avantage concurrentiel réel l'IA doit-elle créer dans votre business ?",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "People", 
      subtitle: "Qui ?",
      description: "Quels utilisateurs, quelles équipes, quelles interactions homme–IA ?",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process",
      subtitle: "Comment ?",
      description: "Quels processus automatiser en priorité pour maximiser le ROI ?",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Platform",
      subtitle: "Avec quoi ?",
      description: "LLM · Agents · RAG · Automatisations · Frontend IA · API",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance",
      subtitle: "Combien ?",
      description: "Quels KPIs business mesurables : temps gagné, CA généré, coûts évités.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-6 mb-8 opacity-70">
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default">
              <Brain className="w-12 h-12 text-blue-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '100ms' }}>
              <Zap className="w-12 h-12 text-purple-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '200ms' }}>
              <Shield className="w-12 h-12 text-indigo-400" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Bien plus qu'un site Web,
            </span>
            <br />
            <span className="text-white">
              l'IA qui pilote votre croissance
            </span>
          </h1>

          {/* Sub-heading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Applications web et mobiles AI-natives : passez de l'outil passif au système autonome.
            <br />
            <span className="text-blue-400 font-semibold">
              Audit stratégique offert + maquette interactive livrée avant tout engagement.
            </span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-3 text-lg">
              <Brain className="w-5 h-5 text-blue-400" />
              <span>Intelligence embarquée dès la conception</span>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Conversion et productivité décuplées</span>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <Shield className="w-5 h-5 text-indigo-400" />
              <span>Sécurité & conformité by design</span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Link
              to="/contact" 
              onClick={() => window.scrollTo(0, 0)}
              className="relative px-8 py-4 bg-slate-900 rounded-lg leading-none flex items-center space-x-3 text-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>Démarrer mon Audit Gratuit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Preuve de Concept */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                La maquette avant le code :
              </span>
              <br />
              <span className="text-white">
                visualisez votre futur système en 72h
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Concept</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Avant d'écrire la moindre ligne de code, nous concevons une maquette haute fidélité interactive intégrant :
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">UX premium</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Parcours utilisateurs intelligents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Agents IA simulés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Logiques métiers automatisées</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Argumentaire</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Visualisez votre futur outil en 72h.
                Nous validons l'expérience, la logique IA et les flux métier avant tout développement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-orange-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Réduction du risque projet</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Validation 60% plus rapide</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Économie moyenne de 30 à 50% sur les coûts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit 5P - Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Un audit stratégique pour ne plus jamais deviner.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audit5P.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-400 font-semibold mb-3">{item.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg">
              <div className="bg-slate-900 rounded-lg px-8 py-4">
                <p className="text-xl font-semibold">
                  → Roadmap IA personnalisée + maquette interactive + plan de ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi 2026 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Pourquoi un site classique ne suffit plus en 2026
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Site traditionnel</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Statique</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Réactif</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Contenu figé</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Tunnel rigide</span>
                  <span className="text-red-400">✗</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-700">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Site AI-Native</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Proactif</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Prédictif</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Conversationnel</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Personnalisation temps réel</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Avantage stratégique</h3>
            <p className="text-gray-300 mb-6">
              Votre site devient un système intelligent autonome capable de :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Qualifier vos leads</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Répondre instantanément</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Prédire les intentions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Optimiser la conversion en continu</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl text-purple-400 font-semibold">
              Optimisation pour les moteurs génératifs (GEO) :
            </p>
            <p className="text-gray-300 mt-2">
              Votre site ne sera pas seulement lu par des humains — il sera cité, résumé et recommandé par les IA (ChatGPT, Perplexity, Google SGE).
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof & ROI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Crédibilité chiffrée
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2">+40% à +60%</div>
              <p className="text-gray-300">de taux de prise de rendez-vous</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">x3</div>
              <p className="text-gray-300">sur le taux de qualification des leads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-400 mb-2">-70%</div>
              <p className="text-gray-300">de réduction du temps de traitement</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Notre plateforme est devenue un véritable assistant business."
              </p>
              <p className="text-white font-semibold">Julie Martin – CEO, FinTechFlow</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Nous avons automatisé 80% de nos processus clients en 30 jours."
              </p>
              <p className="text-white font-semibold">Marc Dubois – COO, LogiSmart</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Partenaires technologiques</h3>
            <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
              <span className="text-2xl font-bold text-blue-400">OpenAI</span>
              <span className="text-2xl font-bold text-purple-400">Anthropic</span>
              <span className="text-2xl font-bold text-cyan-400">Mistral AI</span>
              <span className="text-2xl font-bold text-orange-400">AWS</span>
              <span className="text-2xl font-bold text-green-400">Stripe</span>
              <span className="text-2xl font-bold text-indigo-400">Supabase</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Questions stratégiques
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl border border-slate-700">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Prêt pour votre transition IA ?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Obtenez votre roadmap stratégique + maquette interactive personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>Audit gratuit</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Check className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Check className="w-5 h-5" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-white rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link 
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="relative px-8 py-4 bg-slate-900 rounded-lg leading-none flex items-center space-x-3 text-xl font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                <span>Je réserve mon audit maintenant</span>
                <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateurWeb;