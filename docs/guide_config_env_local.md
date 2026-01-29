# Configuration .env.local - Guide Complet

## 🎯 Objectif
Configurer votre projet React pour se connecter à votre base de données Supabase.

## ⚠️ AVANT DE COMMENCER

### 1. Obtenir vos clés Supabase
1. **Se connecter** à https://app.supabase.com
2. **Sélectionner votre projet** Visiontek
3. **Aller dans Settings > API** dans le dashboard
4. **Copier les valeurs suivantes** :
   - **Project URL** : `https://xxxxxxxx.supabase.co`
   - **Anon Public Key** : Clé commençant par `eyJhbGciOi...`

### 2. Vérifier votre table contacts
Assurez-vous que la table `contacts` existe avec les colonnes requises :
```sql
-- Table contacts doit exister
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'contacts' 
AND table_schema = 'public';
```

## 📋 ÉTAPES DE CONFIGURATION

### Étape 1 : Créer le fichier .env.local
```bash
# Copier le template vers votre fichier local
cp .env.local.example .env.local
```

### Étape 2 : Remplacer les valeurs
Ouvrir `.env.local` avec un éditeur de texte :

```bash
# Configuration Supabase - À remplacer par vos vraies valeurs
REACT_APP_SUPABASE_URL=https://votre-projet-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=votre_clé_anon_publique
```

### Étape 3 : Valider la configuration
```bash
# Redémarrer le serveur de développement
npm run dev

# Le serveur devrait démarrer sur http://localhost:5173 ou 5176
```

## 🔧 TEST DE CONNEXION

### Test 1 : Console navigateur
1. **Ouvrir** http://localhost:5173 dans votre navigateur
2. **Ouvrir la console développeur** (F12)
3. **Coller et exécuter** :
```javascript
// Test connexion Supabase
const { data, error } = await supabase.from('contacts').select('count').single();
if (error) {
  console.error('❌ Erreur connexion:', error.message);
} else {
  console.log('✅ Connexion OK:', data);
}
```

### Test 2 : Formulaire contact
1. **Aller à la section Contact** 
2. **Remplir le formulaire** avec des données de test
3. **Soumettre** et vérifier la console
4. **Vérifier Supabase Dashboard** > Table Builder > contacts

### Test 3 : Validation complète
```javascript
// Test insertion complète
const testData = {
  nom: 'Test Visiontek',
  email: 'test@visiontek.com', 
  sujet: 'Test configuration',
  message: 'Test de connexion Supabase depuis .env.local configuré',
  consent_rgpd: true
};

const { data, error } = await supabase
  .from('contacts')
  .insert([testData])
  .select();

console.log('Résultat insertion:', { data, error });
```

## ✅ CRITÈRES DE VALIDATION

### Si tout fonctionne :
- ✅ **Pas d'erreurs** dans console navigateur
- ✅ **Connexion API réussie** (test 1)
- ✅ **Insertion données réussie** (test 2)
- ✅ **Données visibles** dans Supabase Dashboard
- ✅ **Formulaire fonctionnel** avec validation frontend

### En cas d'erreur :
- ❌ **URL incorrecte** : Vérifier format `https://xxxx.supabase.co`
- ❌ **Clé invalide** : Recopier exactement depuis Supabase Dashboard
- ❌ **Table inexistante** : Exécuter le script SQL fourni
- ❌ **RLS bloquant** : Vérifier politiques dans Supabase > Authentication > Policies

## 🛡️ SÉCURITÉ IMPORTANTE

### ✅ Ce qui est sécurisé :
- `.env.local` dans `.gitignore` (jamais commité)
- Utilisation clé **anon** (accès limité)
- **RLS actif** sur table contacts

### ⚠️ Ce qui est interdit :
- **Jamais** utiliser clé `service_role` coté client
- **Jamais** exposer `.env.local` publiquement
- **Jamais** commiter les vraies clés dans Git

## 📞 SUPPORT

### Problèmes fréquents :
1. **CORS Error** : Vérifier URL Supabase correcte
2. **Invalid API Key** : Recopier exactement depuis Dashboard
3. **Table doesn't exist** : Exécuter script SQL création table
4. **RLS Permission Denied** : Vérifier politiques d'accès

### En cas de problème :
1. **Console navigateur** : Première source d'informations
2. **Supabase Dashboard** : Logs dans Settings > Logs
3. **Documentation complète** : `docs/supabase_client_setup.md`

---

**Une fois .env.local configuré et validé, votre formulaire contact sera pleinement opérationnel !**