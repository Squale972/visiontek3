import React from 'react';
import { ArrowRight, Clock, TrendingUp, Shield, BarChart3, CheckCircle, Users, Target, Zap, AlertCircle, PieChart, Lock, Award, Headphones, Brain, Zap as ZapIcon, Shield as ShieldIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultingIA = () => {
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
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Transformez votre entreprise grâce à l'
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> IA opérationnelle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Automatisez, optimisez, accélérez — sans complexité technique.<br/>
              Nous concevons des applications intelligentes et des automatisations sur mesure, orientées résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Obtenir mon Audit IA gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-gray-300 font-medium">
                Audit stratégique offert + essai sans risque 14 jours
              </div>
            </div>

            {/* Bénéfices clés */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Productivité x2 à x5</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Réduction coûts jusqu'à 60%</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Sécurité & RGPD natifs</div>
              </div>
            </div>
          </div>

          {/* Preuve sociale */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 font-medium mb-6">
              <span>Finance</span>
              <span>•</span>
              <span>E-commerce</span>
              <span>•</span>
              <span>Industrie</span>
              <span>•</span>
              <span>RH</span>
              <span>•</span>
              <span>Formation</span>
              <span>•</span>
              <span>SaaS</span>
            </div>
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-3xl font-black text-white">+18 000</div>
                <div className="text-gray-300">heures automatisées</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">97 %</div>
                <div className="text-gray-300">satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problèmes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ce que vous perdez chaque semaine sans automatisation intelligente
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Clock className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Temps perdu</h3>
              <p className="text-gray-300">Jusqu'à 40% du temps de vos équipes consommé par des tâches répétitives : saisie, reporting, suivi, relances.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Processus fragmentés</h3>
              <p className="text-gray-300">Vos outils ne communiquent pas → erreurs, doublons, lenteur décisionnelle.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Opportunités manquées</h3>
              <p className="text-gray-300">Leads froids, délais de réponse longs, perte de chiffre d'affaires.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Risque humain</h3>
              <p className="text-gray-300">Fatigue, surcharge cognitive, erreurs manuelles coûteuses.</p>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl border border-red-700/30">
            <p className="text-xl text-white font-semibold">
              Chaque jour sans automatisation vous coûte de l'argent, du temps et de l'énergie stratégique.
            </p>
          </div>
        </div>
      </section>

      {/* Méthodologie 3 Phases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Une méthode en 3 phases pour un ROI rapide et mesurable
            </h2>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Audit IA "Radar 360" (Offert)</h3>
                  <p className="text-gray-200 mb-6">Objectif : Identifier précisément vos leviers d'automatisation à fort impact.</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Analyse complète de vos processus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Détection de 40+ cas d'usage personnalisés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Priorisation selon ROI et complexité</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-semibold">Livrable :</span>
                    </div>
                    <p className="text-gray-300">Rapport stratégique détaillé + feuille de route IA</p>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Réserver mon audit gratuit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Prototype & Essai "Impact Immédiat" (14 jours)</h3>
                  <p className="text-gray-200 mb-6">Objectif : Démontrer la valeur en conditions réelles.</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Déploiement d'une automatisation concrète</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Connexion à vos outils existants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Test sur vos propres données</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Résultats visibles dès 14 jours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Industrialisation & Scalabilité</h3>
                  <p className="text-gray-200 mb-6">Objectif : Transformer vos process en véritable moteur de croissance.</p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <BarChart3 className="w-6 h-6 text-green-400 mb-2" />
                      <span className="text-gray-300 text-sm">Déploiement multi-processus</span>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Users className="w-6 h-6 text-blue-400 mb-2" />
                      <span className="text-gray-300 text-sm">IA conversationnelle</span>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Target className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-gray-300 text-sm">Agents autonomes</span>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Shield className="w-6 h-6 text-green-400 mb-2" />
                      <span className="text-gray-300 text-sm">Monitoring continu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'Usage Secteurs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Des résultats tangibles dans tous les secteurs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Automatisation du contrôle de conformité</li>
                <li>• Génération automatique de rapports</li>
                <li>• Scoring intelligent</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-4">Industrie & Logistique</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Optimisation des flux</li>
                <li>• Détection d'anomalies</li>
                <li>• Prévision des stocks</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🧑‍💼</div>
              <h3 className="text-xl font-bold text-white mb-4">RH & Formation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Tri intelligent de CV</li>
                <li>• Agents IA de formation</li>
                <li>• Automatisation administrative</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Support client IA</li>
                <li>• Relance panier abandonné</li>
                <li>• Recommandations personnalisées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Dashboard */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un pilotage précis de votre performance IA
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Dashboard client</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Heures économisées en temps réel</span>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">ROI financier automatique</span>
                </div>
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Productivité par équipe</span>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">Taux de succès des automatisations</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Reporting</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Rapports journaliers</div>
                  <div className="text-gray-300">Suivi des performances et anomalies</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Synthèse hebdomadaire ROI</div>
                  <div className="text-gray-300">Métriques clés et tendances</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Comité stratégique mensuel</div>
                  <div className="text-gray-300">Revue stratégique et optimisations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité & Conformité */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre donnée est un actif stratégique — nous la protégeons
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Hébergement souverain en Europe</h3>
              <p className="text-gray-300">Données stockées sur territoire européen</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Chiffrement avancé</h3>
              <p className="text-gray-300">Protection de bout en bout de vos données</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Conformité RGPD stricte</h3>
              <p className="text-gray-300">Privacy by design + Security by architecture</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-8 border border-green-700/30">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">Approche : Privacy by design + Security by architecture</span>
            </div>
            <p className="text-gray-300 text-lg">
              Zéro entraînement sur vos données • Isolation complète des environnements
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'alliance du conseil stratégique et de l'ingénierie IA avancée
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expertise IA appliquée terrain</h3>
              <p className="text-gray-300 text-sm">Solutions éprouvées en entreprise</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Approche orientée business</h3>
              <p className="text-gray-300 text-sm">Pas techno, mais résultats</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Déploiement rapide</h3>
              <p className="text-gray-300 text-sm">Premiers résultats en 14 jours</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ROI mesuré</h3>
              <p className="text-gray-300 text-sm">Suivi continu de la valeur</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Accompagnement long terme</h3>
              <p className="text-gray-300 text-sm">Support et optimisation continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Est-ce complexe à mettre en place ?</h3>
              <p className="text-gray-300">Non. Nous nous connectons à votre stack existante sans interruption.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Quel ROI attendre ?</h3>
              <p className="text-gray-300">Retour sur investissement moyen sous 60 jours.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Faut-il une équipe technique interne ?</h3>
              <p className="text-gray-300">Non, nous gérons l'intégralité du cycle.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">L'IA remplace-t-elle les employés ?</h3>
              <p className="text-gray-300">Non. Elle augmente leur impact et leur valeur stratégique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
    </div>
  );
};

export default ConsultingIA;