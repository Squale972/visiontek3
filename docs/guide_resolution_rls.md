# 🚨 Guide Résolution Problème RLS Supabase

## 📋 État Actuel
- Politique créée mais non appliquée
- Table `contacts` visible mais politique inactive

## 🔍 Diagnostic rapide

### 1. Vérifier dans Supabase Dashboard
```
Dashboard > Table Editor > contacts > Settings > RLS policies
```
Vérifier si le toggle "Enable RLS" est bien activé.

### 2. Vérifier permissions utilisateur
Dans SQL Editor exécuter :
```sql
SELECT grantee, table_name, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';
```

## ⚡ Solutions (par ordre de priorité)

### ✅ Solution 1 : Réactiver RLS
```sql
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
```

### ✅ Solution 2 : Recréer politiques
Exécuter `supabase_recreate_policies.sql`

### ✅ Solution 3 : Solution complète
Exécuter `supabase_solution_complete.sql` (réinitialise tout)

## 🧪 Test final

### Via API (curl)
```bash
curl -X POST 'https://[VOTRE-PROJET].supabase.co/rest/v1/contacts' \
  -H "apikey: [VOTRE-API-KEY]" \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@test.com", "subject": "Test", "message": "Test"}'
```

### Via application React
```javascript
const { data, error } = await supabase
  .from('contacts')
  .insert([{
    name: 'Test',
    email: 'test@test.com', 
    subject: 'Test',
    message: 'Test'
  }]);

console.log(error); // Devrait être null
```

## 🔧 Si problème persiste

1. **Vider cache navigateur** (Ctrl+Shift+R)
2. **Vérifier variables environnementales** (.env.local)
3. **Redémarrer application locale** (npm run dev)
4. **Regénérer clés API** si nécessaire

## 📞 Support
- Documentation: `docs/backend_formulaire_n8n.md`
- Schéma SQL: `docs/supabase_table_contacts.sql`
- Guide config: `docs/guide_config_env_local.md`

## ⚠️ Erreurs communes
- Oublier d'activer RLS (toggle)
- Politique créée mais mauvais rôle (anon vs authenticated)
- Permissions table manquantes (GRANT)