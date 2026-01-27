# Visiontek - Plan de Développement

## 🎯 Objectif
Créer une application web vitrine pour une entreprise spécialisée en IA et services numériques.

## 📋 État Actuel
- Statut : Application fonctionnelle
- Branche : main
- Progresse : Site web complété et déployable

## 🎨 Assets Disponibles
- Logo : Logo Visiontek_fond noir.jpg (dans public/)
- Logo original : logo-original.png (récupéré du site de référence)
- Charte graphique : Dark Glassmorphism

## 🎨 Style Design Utilisé
**Design Principal : "Dark Glassmorphism"**
- Glassmorphism : Effets de verre dépoli avec backdrop-filter
- Dark Theme : Fond sombre avec contraste élevé
- Gradient Backgrounds : Dégradés vifs (purple, blue, indigo)
- Neumorphism Elements : Ombres douces et effets de profondeur
- Style typique tech startup SaaS moderne
- Esthétique "cyberpunk-meets-minimalist"

## 🛠️ Tech Stack Cible
- Frontend : React + Vite
- Styling : Tailwind CSS
- Icons : Lucide-React
- Hébergement : Netlify

## 📐 Structure du Projet
```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css
└── tailwind.config.js
```

## 🏗️ Sections Requises
1. Header (logo, navigation, contact)
2. Hero (accroche IA)
3. Services (3 cartes)
   - Formateur (Formations IA)
   - Consultant (Audit + solutions IA)
   - Créateur Web (Sites IA)
4. CTA (formulaire contact)
5. Footer

## ⚡ Prochaines Actions
- [ ] Lancer `npm run build` pour vérifier le build de production
- [ ] Déployer sur Netlify si nécessaire
- [ ] Ajouter logo réel dans public/ (remplacer placeholder)