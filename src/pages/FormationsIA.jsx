import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Footer from '../components/Footer';

// Hook pour détecter les préférences de mouvement
const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);
    
    const handleChange = (e) => setShouldReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return shouldReduceMotion;
};
import { 
  Brain, 
  Code2, 
  MonitorSpeaker, 
  GraduationCap, 
  Server,
  ChevronRight,
  Clock,
  Users,
  Star,
  TrendingUp,
  Zap,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// SVG placeholders inline pour éviter les imports externes
const expertiseIA = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%236366f1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EExpertise IA%3C/text%3E%3C/svg%3E";
const devWeb = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%230ea5e9' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EDéveloppement Web%3C/text%3E%3C/svg%3E";
const solutionsOffice = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2310b981' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3ESolutions Office%3C/text%3E%3C/svg%3E";
const digitalSkills = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%238b5cf6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EDigital Skills%3C/text%3E%3C/svg%3E";
const infrastructureIT = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f97316' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EInfrastructure IT%3C/text%3E%3C/svg%3E";

const FormationIA = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Spring physics pour filtres
  const filterSpring = useSpring(activeFilter, { stiffness: 300, damping: 30 });

  // Données des formations extraites du document de référence
  const formations = [
    {
      id: 1,
      titre: "Expertise IA & Efficacité Opérationnelle",
      categorie: "ia",
      description: "Transformez les processus métiers via l'IA générative et l'automatisation intelligente",
      cible: "Dirigeants, cadres, indépendants",
      modules: [
        "Module 1: Fondamentaux stratégiques (7h) - Écosystème IA & Prompt engineering",
        "Module 2: Analyse avancée & multimodalité (14h) - Business intelligence & conformité",
        "Module 3: Architecture d'agents & workflows (21h) - Déploiement GPTs & RAG"
      ],
      duree: "7h à 21h",
      niveau: "Parcours évolutif",
      prix: "Sur devis",
      image: expertiseIA,
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      objectifs: ["ROI rapide & transformation métier", "Automatisation intelligente", "Conformité RGPD"],
      details: {
        programmes: [
          "Fondamentaux: Panorama IA (OpenAI, Anthropic, Google)",
          "Prompt engineering: Cadres Role-Task-Context",
          "Cas d'usage: Automatisation correspondance & synthèse",
          "Techniques avancées: Chain-of-Thought & Tree of Thoughts",
          "Business Intelligence: Analyse Excel/CSV via IA",
          "Agents autonomes: Custom GPTs & API métiers",
          "Orchestration: Flux n8n & systèmes RAG"
        ]
      }
    },
    {
      id: 2,
      titre: "Développement Web IA-assisté & IA augmentée",
      categorie: "numerique",
      description: "Passez du codage manuel à l'architecture de solutions IA-first",
      cible: "Développeurs, CTO, reconversion",
      modules: [
        "Module 1: Socle technique & Frontend (21h) - Architecture moderne & prototypage IA",
        "Module 2: Backend & Data Engineering (36h) - Infrastructure & API assistées",
        "Module 3: Fullstack & Industrialisation (Sur mesure) - Sécurité & développement IA-first"
      ],
      duree: "21h à 50h+",
      niveau: "Cursus intensif",
      prix: "Sur devis",
      image: devWeb,
      icon: Code2,
      color: "from-blue-600 to-cyan-600",
      objectifs: ["Vitesse × qualité × fiabilité", "Production logicielle augmentée", "MVP production-ready"],
      details: {
        programmes: [
          "Frontend: HTML5, CSS3 sémantique, JavaScript algorithmique",
          "Développement assisté: Prototypage rapide Tailwind via prompting",
          "Backend: Node.js, Express, SQL & NoSQL",
          "API design: Génération routes REST & optimisation SQL",
          "Sécurité: Auth0/Firebase & gestion état global",
          "IA-first: Claude Code, Opencode, Antigravity",
          "Industrialisation: CI/CD & tests automatisés"
        ]
      }
    },
    {
      id: 3,
      titre: "Solutions Office – Performance 360°",
      categorie: "bureautique",
      description: "Optimisez la gestion de données et la qualité des supports professionnels",
      cible: "Entreprises, collaborateurs",
      modules: [
        "Excel – Business Intelligence (Essentiel 21h, Avancé 42h, Expert sur mesure)",
        "Word – Communication Corporate (Essentiel 21h, Avancé 42h, Expert sur mesure)",
        "PowerPoint – Présentations à Impact (Essentiel 21h, Avancé 42h, Expert sur mesure)"
      ],
      duree: "21h à 60h+",
      niveau: "Parcours expert",
      prix: "Sur devis",
      image: solutionsOffice,
      icon: MonitorSpeaker,
      color: "from-green-600 to-teal-600",
      objectifs: ["Productivité & qualité documentaire", "Automatisation bureautique", "Professionalisation"],
      details: {
        programmes: [
          "Excel: Structure données, calculs, TCD, Power Query, VBA",
          "Word: Mise page structurée, chartes, publipostage, formulaires",
          "PowerPoint: Conception visuelle, animations, storytelling",
          "Niveaux: Essentiel (fondamentaux), Avancé (spécialisation), Expert (sur mesure)"
        ]
      }
    },
    {
      id: 4,
      titre: "Digital Skills & Culture Numérique",
      categorie: "numerique",
      description: "Acquérez une souveraineté numérique complète",
      cible: "Seniors, reconversion",
      modules: [
        "Module 1 – Maîtrise de l'environnement (21h) - OS, cybersécurité, e-admin",
        "Module 2 – Productivité & Cloud (42h) - Sync multi-devices, collaboration cloud",
        "Module 3 – Identité & Collaboration (Sur mesure) - Personal branding, gestion projet"
      ],
      duree: "21h à 42h",
      niveau: "Parcours autonomie",
      prix: "Sur devis",
      image: digitalSkills,
      icon: GraduationCap,
      color: "from-indigo-600 to-purple-600",
      objectifs: ["Inclusion & souveraineté digitale", "Autonomie numérique", "Collaboration moderne"],
      details: {
        programmes: [
          "OS avancé: Windows/Mac, détection phishing, sécurité transactions",
          "Cloud: Drive/OneDrive, assistance IA rédaction, 2FA",
          "Collaboration: Teams/Slack, Trello/Notion, signature électronique",
          "Personal branding: LinkedIn professionnel & communication digitale"
        ]
      }
    },
    {
      id: 5,
      titre: "Infrastructure IT & Maintenance",
      categorie: "numerique",
      description: "Garantissez la performance, la sécurité et la continuité du parc informatique",
      cible: "Techniciens, responsables parc",
      modules: [
        "Module 1 – Hardware & OS (21h) - Architecture matérielle & Windows 10/11",
        "Module 2 – Réseaux & Sécurité (Sur mesure) - TCP/IP, NAS, Windows Server"
      ],
      duree: "21h à sur mesure",
      niveau: "Expert",
      prix: "Sur devis",
      image: infrastructureIT,
      icon: Server,
      color: "from-orange-600 to-red-600",
      objectifs: ["Sécurité & continuité opérationnelle", "Robustesse système", "Infrastructure moderne"],
      details: {
        programmes: [
          "Hardware: Assemblage haute performance, compatibilité composants",
          "OS: Installation Windows 10/11, UEFI/GPT, gestion pilotes",
          "Réseaux: Configuration TCP/IP, NAS Synology, Windows Server",
          "Sécurité: Stratégies sauvegarde 3-2-1, clonage & PRA",
          "Automation: PowerShell assisté par IA & diagnostic prédictif"
        ]
      }
    }
  ];

  const filtres = [
    { id: 'all', label: 'Toutes les formations', icon: Target },
    { id: 'ia', label: 'Expertise IA', icon: Brain },
    { id: 'bureautique', label: 'Solutions Office', icon: MonitorSpeaker },
    { id: 'numerique', label: 'Digital & Infrastructure', icon: Code2 }
  ];

  // Filtrer les formations
  const filteredFormations = activeFilter === 'all' 
    ? formations 
    : formations.filter(f => f.categorie === activeFilter);

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background animé */}
      <motion.div 
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
      >
        {/* Gradients animés */}
        <motion.div
          animate={
            shouldReduceMotion ? 
            { scale: 1, rotate: 0 } :
            {
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }
          }
          transition={
            shouldReduceMotion ? 
            { duration: 0 } :
            {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }
          className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion ? 
            { scale: 1, rotate: 0 } :
            {
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }
          }
          transition={
            shouldReduceMotion ? 
            { duration: 0 } :
            {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }
          }
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30"
          >
            <Zap className="w-5 h-5 text-purple-400" />
             <span className="text-purple-300 text-sm font-medium">Programmes 2026</span>
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Formations
            </span>
            <br />
            <span className="text-slate-200">Sur Mesure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Programmes sur mesure conçus pour la transformation digitale. 
            De l'expertise IA stratégique à la maîtrise infrastructure, formez-vous aux compétences qui transforment.
          </motion.p>
        </motion.div>
      </section>

      {/* Filtres animés */}
      <section className="relative z-10 px-6 pb-12">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.6, 
            delay: shouldReduceMotion ? 0 : 0.6 
          }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {filtres.map((filtre) => {
            const Icon = filtre.icon;
            const isActive = activeFilter === filtre.id;
            
            return (
              <motion.button
                key={filtre.id}
                onClick={() => setActiveFilter(filtre.id)}
                style={{ scale: shouldReduceMotion ? 1 : filterSpring }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {filtre.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId={shouldReduceMotion ? undefined : "activeFilter"}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    initial={false}
                    transition={
                      shouldReduceMotion ? 
                      { duration: 0 } :
                      {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }
                    }
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      {/* Cartes des formations */}
      <section className="relative z-10 px-6 pb-20">
        <motion.div
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredFormations.map((formation, index) => {
              const Icon = formation.icon;
              
              return (
                <motion.div
                  key={formation.id}
                  layout={shouldReduceMotion ? false : true}
                  animate="visible"
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -10,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredCard(formation.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  style={{
                    perspective: shouldReduceMotion ? 'none' : '1000px',
                    transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d'
                  }}
                  className="relative group"
                >
                  {/* Carte principale */}
                  <motion.div
                    className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{
                      boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25)'
                    }}
                  >
                    {/* Header avec gradient */}
                    <div className={`h-3 bg-gradient-to-r ${formation.color}`} />
                    
                    {/* Popularité badge */}
                    {formation.popularite > 85 && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: shouldReduceMotion ? 0 : index * 0.1 + 0.8 
                        }}
                        className="absolute top-4 right-4 z-10"
                      >
                        <div className="flex items-center gap-1 px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="text-amber-300 text-xs font-medium">Populaire</span>
                        </div>
                      </motion.div>
                    )}

<div className="p-10 space-y-6">
                      {/* Icon et titre */}
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          animate={{
                            rotate: hoveredCard === formation.id ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{formation.titre}</h3>
                          <p className="text-slate-400 text-sm">{formation.niveau}</p>
                        </div>
                      </div>

                      {/* Description et niveau */}
                      <div className="space-y-3">
                        <p className="text-slate-300 mb-4 leading-relaxed text-base">{formation.description}</p>
                        <span className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-400">
                          {formation.niveau}
                        </span>
                      </div>

                      {/* Séparateur */}
                      <div className="border-t border-slate-700/50"></div>

                      {/* Cible et objectifs */}
                      <div className="space-y-6">
                        {/* Cible */}
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Public cible
                          </h4>
                          <p className="text-sm text-slate-300">{formation.cible}</p>
                        </div>
                        
                        {/* Objectifs */}
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Objectifs clés
                          </h4>
                          <ul className="space-y-2">
                            {formation.objectifs.map((objectif, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 + idx * 0.1 }}
                                className="flex items-start gap-2 text-sm text-slate-300"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1.5" />
                                <span className="font-medium">{objectif}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Séparateur */}
                      <div className="border-t border-slate-700/50"></div>

                      {/* Programmes détaillés */}
                      <div>
                        <h4 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Programmes détaillés
                        </h4>
                        <ul className="space-y-2">
                          {formation.modules.slice(0, 3).map((module, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.5 + idx * 0.1 }}
                              className="flex items-start gap-2 text-sm text-slate-400"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1.5" />
                              <span>{module}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Séparateur */}
                      <div className="border-t border-slate-700/50"></div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{formation.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Award className="w-4 h-4" />
                          <span className="text-sm">Sur devis</span>
                        </div>
                      </div>

                      {/* Prix et CTA */}
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <span className="text-2xl font-bold text-white">{formation.prix}</span>
                          <span className="text-slate-500 text-sm ml-1">/programme</span>
                        </div>
                         <Link
                           to="/contact"
                           onClick={() => window.scrollTo(0, 0)}
                           className={`px-4 py-2 bg-gradient-to-r ${formation.color} text-white rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}
                         >
                           <span>Nous contacter</span>
                           <ArrowRight className="w-4 h-4" />
                         </Link>
                       </div>
                     </div>
                  </motion.div>
                </motion.div>
              );
            })}
        </motion.div>
      </section>

      {/* Section stats */}
      <section className="relative z-10 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Impact et Résultats</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes : notre expertise transforme les performances métier.
          </p>
        </motion.div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, label: "Pôles d'expertise", value: "5", desc: "Domaines spécialisés" },
              { icon: Users, label: "Entreprises formées", value: "200+", desc: "Accompagnement personnalisé" },
              { icon: TrendingUp, label: "Impact métier", value: "87%", desc: "ROI moyen constant" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default FormationIA;