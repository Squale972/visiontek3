import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Users, 
  Target, 
  Zap, 
  AlertCircle, 
  PieChart, 
  Lock, 
  Award, 
  Headphones, 
  Brain, 
  Zap as ZapIcon, 
  Shield as ShieldIcon 
} from 'lucide-react';
import Footer from '../components/Footer';

const ConsultingIA = () => {
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

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-6 mb-8 opacity-70">
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default">
              <Brain className="w-12 h-12 text-blue-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '100ms' }}>
              <ZapIcon className="w-12 h-12 text-purple-400" />
            </div>
            <div className="animate-bounce hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '200ms' }}>
              <ShieldIcon className="w-12 h-12 text-indigo-400" />
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-lg inline-block mb-6">
              Expert Consulting IA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                Transformez votre entreprise grâce à l'IA
              </span>
              <br />
              <span className="text-white font-extrabold tracking-tight">opérationnelle</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              De l'audit stratégique à l'industrialisation, boostez votre performance avec l'intelligence artificielle
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-8"
            >
              Commencer votre transformation
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems & Costs Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ce que vous perdez chaque semaine sans automatisation
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Coûts cachés, erreurs répétitives, opportunités manquées
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-blue-400 text-2xl font-bold mb-4">€8,500</div>
              <h3 className="text-white font-semibold mb-2">Temps perdu</h3>
              <p className="text-gray-300 text-sm">40h/semaine en tâches répétitives</p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-red-400 text-2xl font-bold mb-4">€2,200</div>
              <h3 className="text-white font-semibold mb-2">Erreurs opérationnelles</h3>
              <p className="text-gray-300 text-sm">15h/semaine en corrections manuelles</p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-orange-400 text-2xl font-bold mb-4">€12,500</div>
              <h3 className="text-white font-semibold mb-2">Opportunités manquées</h3>
              <p className="text-gray-300 text-sm">Clients et revenus non convertis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology 3 Phases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre méthodologie 3 phases
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              De l'audit à l'autonomie, en passant par le prototype
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phase 1</h3>
                  <p className="text-blue-300 font-medium">Audit 360°</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Analyse complète de vos processus, identification des goulots d'étranglementement et recommandations prioritaires.
              </p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phase 2</h3>
                  <p className="text-purple-300 font-medium">Prototype 14 jours</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Solution concrète développée en 2 semaines pour validation rapide et premiers retours business.
              </p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phase 3</h3>
                  <p className="text-indigo-300 font-medium">Industrialisation</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Déploiement de l'IA dans vos processus avec formation équipes et support continu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cas d'usage par secteur
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Solutions adaptées à chaque industrie pour un impact maximal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Finance</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-blue-300">Automatisation</strong> des rapports, détection de fraude et prédictions financières.
                </p>
                <p className="text-gray-300">
                  Réduction de 70% du temps de traitement avec 99% d'accuracy.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Industrie</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-purple-300">Maintenance prédictive</strong> et optimisation des chaînes de production.
                </p>
                <p className="text-gray-300">
                  Augmentation de 30% de la productivité avec réduction des pannes de 50%.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">RH</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-indigo-300">Recrutement IA</strong> et analyse de CV.
                </p>
                <p className="text-gray-300">
                  Réduction de 60% du temps de présélection avec matching prédictif des compétences.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-green-300">Chatbots intelligents</strong> et recommandation produits.
                </p>
                <p className="text-gray-300">
                  Augmentation de 35% du taux de conversion et réduction de 25% des retours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Dashboard Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Reporting & Tableaux de bord en temps réel
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Preuves par les chiffres et suivi des performances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <PieChart className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Analytics</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-blue-300">Mesure directe</strong> du retour sur investissement.
                </p>
                <p className="text-gray-300">
                  Calcul automatique du gain par processus et par employé.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">KPIs Opérationnels</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-green-300">Tableaux de bord</strong> en temps réel.
                </p>
                <p className="text-gray-300">
                  Suivi des métriques clés et alertes proactives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sécurité & Conformité
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Protection de vos données et conformité réglementaire
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hébergement Souverain</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-blue-300">Datacenters UE</strong> avec chiffrement AES-256.
                </p>
                <p className="text-gray-300">
                  Conformité RGPD et protection maximale des données clients.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">RGPD by Design</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-purple-300">Privacy-first</strong> dans toutes nos solutions.
                </p>
                <p className="text-gray-300">
                  Anonymisation, droit à l'oubli et portabilité des données.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              L'excellence technique et l'accompagnement sur mesure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expertise Terrain</h3>
                  <p className="text-blue-300">10 ans d'expérience</p>
                  <p className="text-gray-300">
                    Consultants seniors avec formations certifiantes et projets réussis.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">ROI Mesuré</h3>
                  <p className="text-purple-300">+127% moyen</p>
                  <p className="text-gray-300">
                    Retour sur investissement visible en moins de 90 jours.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Accompagnement</h3>
                  <p className="text-indigo-300">Personnalisé</p>
                  <p className="text-gray-300">
                    Suivi dédié et formation des équipes jusqu'à autonomie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions stratégiques
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Réponses à vos interrogations sur l'IA d'entreprise
            </p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <details className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-lg hover:text-blue-300 transition-colors">
                  <span>{item.question}</span>
                  <span className="text-blue-400">+</span>
                </summary>
                <div className="pt-4 text-gray-300">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-16 border border-blue-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Découvrez en 45 minutes comment l'IA peut transformer votre organisation
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Audit stratégique IA gratuit – Sans engagement
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Je réserve mon audit maintenant
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingIA;