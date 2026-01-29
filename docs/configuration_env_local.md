# Instructions Configuration .env.local

## 🎯 Objectif
Configurer les variables d'environnement locales pour connecter l'application React à votre base de données Supabase.

## 📋 Étapes à suivre

### 1. Copier le template
```bash
# Copier le fichier template vers .env.local
cp .env.local.example .env.local
```

### 2. Obtenir les clés Supabase
1. **Se connecter à Supabase Dashboard** : https://app.supabase.com
2. **Sélectionner votre projet** Visiontek
3. **Aller dans Settings > API** :
   - **Project URL** : `https://votre-projet.supabase.co`
   - **Anon Public Key** : `eyJhbGciOiJIUzI1NiIs...`
   - **Service Role Key** : `eyJhbGciOiJIUzI1NiIs...` (garder privée)

### 3. Configurer .env.local
Ouvrir `.env.local` et remplacer les valeurs placeholder :

```bash
# Configuration Supabase
REACT_APP_SUPABASE_URL=https://votre-projet.supabase.co
REACT_APP_SUPABASE_ANON_KEY=votre-clé-anon-publique
```

### 4. Variables sécurisées (NE PAS COMMITER)
- ✅ `.env.local` déjà dans `.gitignore`
- ❌ Jamais commiter les vraies clés
- ⚠️ Ne jamais utiliser `service_role` coté client

## 🔧 Validation

### Tester la connexion
```javascript
// Dans le navigateur console sur localhost
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

// Test simple
const { data, error } = await supabase.from('contacts').select('count').single();
console.log('Connexion Supabase:', error ? 'Erreur' : 'OK', data);
```

### Vérifier variables
```javascript
// Dans console React
console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
console.log('Supabase Key:', process.env.REACT_APP_SUPABASE_ANON_KEY?.substring(0, 10) + '...');
```

## ⚠️ Points Importants

### Sécurité
- **Anon Key** : Pour lecture publique (frontend)
- **Service Key** : Pour écriture/admin (backend n8n uniquement)
- **RLS Policies** : Protégent l'accès même avec anon key

### Développement vs Production
- **Développement** : `.env.local` (configuré manuellement)
- **Production** : Variables Netlify (à configurer dans dashboard)

### Prochaine étape
Une fois `.env.local` configuré :
1. **Redémarrer le serveur de développement** (`npm run dev`)
2. **Tester le formulaire** dans la section Contact
3. **Vérifier l'insertion** dans Supabase Dashboard
4. **Vérifier les erreurs** dans console navigateur

---

**Configuration obligatoire avant de tester le formulaire !**