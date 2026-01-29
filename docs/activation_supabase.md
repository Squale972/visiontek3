# Activation Supabase - Guide Étape par Étape

## 🎯 Objectif
Remplacer temporairement Netlify Forms par Supabase API pour tester la soumission des données dans votre base de données sécurisée.

## 📋 Étapes d'Activation

### 1. Vérification Pré-requis
```bash
# Confirmer que votre table est prête
# Ouvrir : https://app.supabase.com/project/votre-projet/table/contacts
# Vérifier que la table existe avec les colonnes : nom, email, sujet, message, etc.
```

### 2. Modification du Composant Contact

**Fichier à modifier :** `src/components/Contact.jsx`

**Activer Supabase :**
```jsx
// Ligne 6-11 : Remplacer le try/catch par initialisation simple
// AVANT :
let supabase;
try {
  supabase = createClient(...);
} catch (error) { /* ... */ }

// APRÈS :
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
```

**Désactiver Netlify Forms :**
```jsx
// Ligne 82 : Supprimer data-netlify attributes
// AVANT :
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}>

// APRÈS :
<form onSubmit={handleSubmit}>
```

**Activer Appel Supabase :**
```jsx
// Ligne 26-60 : Remplacer la soumission Netlify par Supabase
// AVANT :
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(formData).toString(),
});

// APRÈS :
const submissionData = {
  nom: formData.name,
  email: formData.email,
  entreprise: formData.company,
  service: formData.service,
  sujet: `Demande ${formData.service || 'générale'}`,
  message: formData.message,
  source_url: window.location.href,
  user_agent: navigator.userAgent,
  consent_rgpd: formData.consent_rgpd,
  priority: '1'
};

const { data, error } = await supabase
  .from('contacts')
  .insert([submissionData])
  .select();
```

### 3. Désactivation Temporaire de Fallback

**Supprimer les éléments Netlify :**
```jsx
// Lignes 89-90 : Supprimer inputs cachés Netlify
<input type="hidden" name="form-name" value="contact" />
<input type="hidden" name="bot-field" />
```

### 4. Test de l'Activation

**Redémarrer le serveur :**
```bash
npm run dev
```

**Tester l'insertion :**
1. Aller sur http://localhost:5175/#contact
2. Remplir le formulaire avec des données de test
3. Soumettre et vérifier la console navigateur
4. Confirmer l'insertion dans Supabase Dashboard

**Messages de succès attendus :**
```javascript
console.log('✅ Contact soumis avec ID:', data[0]?.id);
```

## 🔍 Validation de l'Activation

### Dans Supabase Dashboard
1. **Ouvrir Table Editor** : contacts
2. **Vérifier nouvelle ligne** avec vos données de test
3. **Confirmer les colonnes** : nom, email, sujet, message, created_at

### Dans Console Navigateur
- **Pas d'erreurs** JavaScript
- **Messages de succès** affichés
- **Variables environnement** correctement lues

## ⚠️ Points de Vigilance

### Pendant le test
1. **Performance** : Temps de réponse < 1 seconde
2. **Validation** : Tous les champs obligatoires vérifiés
3. **Sécurité** : Aucune erreur d'authentification
4. **Logging** : Messages informatifs dans console

### Si problèmes surviennent
1. **Erreur RLS** : Vérifier les politiques dans Supabase
2. **CORS Error** : URL Supabase incorrecte
3. **Connection timeout** : Problème réseau ou clés invalides

## 📊 Résultats Attendus

### Succès
- ✅ Formulaire soumis via Supabase
- ✅ Données insérées dans la table contacts
- ✅ Messages de confirmation console
- ✅ Temps de réponse acceptable

### Échec
- ❌ Erreur de configuration (variables manquantes)
- ❌ Erreur d'insertion (RLS bloquant)
- ❌ Erreur de connexion (URL/clé invalides)

---

## 🔄 Pour Retour à Netlify Forms

Si Supabase ne fonctionne pas :

**Réactiver Netlify Forms :**
```jsx
// Remettre les attributs Netlify
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}>

// Remettre les inputs cachés
<input type="hidden" name="form-name" value="contact" />
<input type="hidden" name="bot-field" />

// Remettre la soumission fetch
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(formData).toString(),
});
```

---

**Suivez ces étapes pour activer Supabase en test. En cas de problème, la documentation complète est disponible dans les fichiers du dossier `docs/`.**