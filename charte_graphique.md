# Charte Graphique - Visiontek

## 🎨 Design System

### Style Principal : Dark Glassmorphism
Le site Visiontek utilise un design moderne de type "Dark Glassmorphism" combinant des effets de verre dépoli avec un thème sombre et des accents colorés vibrants.

---

## 🎭 Palette de Couleurs

### Couleurs Primaires (Background)
- **Slate-900** : `#0f172a` - Fond principal sombre
- **Slate-800** : `#1e293b` - Fond secondaire
- **Slate-700** : `#334155` - Bordures et éléments sombres

### Couleurs Gradient (Accent)
- **Blue Gradient** : `from-blue-400 to-blue-600` - Actions principales
- **Purple Gradient** : `from-purple-400 to-purple-600` - Éléments premium
- **Indigo Gradient** : `from-indigo-400 to-indigo-600` - Technologies
- **Cyan Gradient** : `from-blue-600 to-cyan-600` - Service Formation
- **Pink Gradient** : `from-purple-600 to-pink-600` - Service Consulting
- **Purple-Indigo** : `from-indigo-600 to-purple-600` - Service Web

### Couleurs Texte
- **White** : `#ffffff` - Texte principal
- **Gray-300** : `#d1d5db` - Texte secondaire
- **Gray-400** : `#9ca3af` - Texte tertiaire

---

## 🎯 Composants Clés

### Header & Footer
- **Background** : `bg-slate-900/95 backdrop-blur-sm`
- **Border** : `border-slate-800`
- **Logo** : `h-16 w-auto` avec fond noir
- **Height** : `h-16` (64px)

### Cartes Services
- **Background** : `bg-slate-800/50 backdrop-blur-sm`
- **Border** : `border-slate-700` → `hover:border-purple-500/50`
- **Padding** : `p-8`
- **Border Radius** : `rounded-2xl`
- **Hover Effect** : `hover:shadow-2xl hover:shadow-purple-500/10`

### Boutons
- **Primaire** : `bg-gradient-to-r from-purple-600 to-blue-600`
- **Secondaire** : `border-2 border-purple-400 text-purple-400`
- **Forme** : `rounded-full` (pill shape)
- **Padding** : `px-8 py-4` (grands) / `px-6 py-2` (petits)

---

## ✨ Effets Visuels

### Glassmorphism
- **Backdrop Filter** : `backdrop-blur-sm`
- **Transparency** : `/95` pour header, `/50` pour cartes
- **Mix Blend Mode** : `mix-blend-multiply` pour orbs

### Arrière-plan Animé
- **Purple Orb** : `bg-purple-500 blur-3xl opacity-20`
- **Blue Orb** : `bg-blue-500 blur-3xl opacity-20`
- **Indigo Orb** : `bg-indigo-500 blur-3xl opacity-10`
- **Animation** : `animate-pulse`

### Text Gradients
- **Primaire** : `from-blue-400 via-purple-400 to-indigo-400`
- **Application** : `bg-clip-text text-transparent`

---

## 🎨 Typographie

### Hiérarchie des Titres
- **H1 (Hero)** : `text-5xl md:text-7xl font-bold`
- **H2 (Sections)** : `text-4xl md:text-5xl font-bold`
- **H3 (Services)** : `text-2xl font-bold`
- **H4 (Benefits)** : `text-xl font-semibold`

### Texte Body
- **Paragraphe** : `text-xl text-gray-300`
- **Description** : `text-gray-400`
- **Petit texte** : `text-sm text-gray-400`

---

## 🔲 Espacement & Layout

### Container
- **Max Width** : `max-w-7xl mx-auto`
- **Padding** : `px-4 sm:px-6 lg:px-8`

### Sections
- **Vertical Spacing** : `py-20` pour sections principales
- **Component Spacing** : `mb-16` entre éléments
- **Grid Gap** : `gap-8` pour grilles de cartes

---

## 🎯 Interactions & Animations

### Hover States
- **Boutons** : `hover:shadow-lg hover:scale-105`
- **Cartes** : `hover:shadow-2xl hover:border-purple-500/50`
- **Liens** : `hover:text-white`
- **Icons** : `hover:scale-110`

### Animations
- **Bounce Icons** : `animate-bounce` avec delays
- **Pulse Effects** : `animate-pulse` pour orbs
- **Smooth Scroll** : `behavior: smooth`
- **Transitions** : `transition-all duration-300`

---

## 📱 Responsive Design

### Breakpoints
- **Mobile** : Styles par défaut
- **Tablet** : `md:` prefix (768px+)
- **Desktop** : `lg:` prefix (1024px+)

### Adaptations
- **Grid** : `md:grid-cols-3` pour services
- **Text Size** : `md:text-7xl` pour titres
- **Flex Direction** : `flex-col sm:flex-row` pour boutons

---

## 🎨 Icônes & Assets

### Icon Library
- **Source** : Lucide-React
- **Taille Hero** : `w-8 h-8`
- **Taille Services** : `w-8 h-8` dans icônes colorées
- **Taille Footer** : `w-5 h-5` pour réseaux sociaux

### Logo
- **Principal** : `Logo Visiontek_fond noir.jpg` (h-16)
- **Favicon** : `Logo Visiontek_solo-transparent.png`

---

## 🎯 Best Practices

### Accessibilité
- Contraste élevé (dark theme)
- Focus states sur éléments interactifs
- Semantic HTML5

### Performance
- Utilisation de Tailwind CSS v4
- Animations CSS natives
- Images optimisées

### Consistance
- Espacements proportionnels (multiples de 4)
- Gradients cohérents
- Effets glassmorphiques uniformes

---

## 🔧 Implémentation Technique

### Classes CSS Principales
```css
/* Header/Footer */
.bg-slate-900/95.backdrop-blur-sm.border-b.border-slate-800

/* Cards */
.bg-slate-800/50.backdrop-blur-sm.rounded-2xl.p-8.border.border-slate-700

/* Buttons */
.bg-gradient-to-r.from-purple-600.to-blue-600.rounded-full.px-8.py-4

/* Text Gradients */
.bg-gradient-to-r.from-blue-400.via-purple-400.to-indigo-400.bg-clip-text.text-transparent
```

Cette charte graphique garantit la cohérence visuelle et l'identité de marque forte de Visiontek sur tous les supports.