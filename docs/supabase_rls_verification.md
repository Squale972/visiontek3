# Vérification RLS et Permissions Supabase

## 🔍 Étapes de Vérification Dashboard Supabase

### 1. Vérifier RLS (Row Level Security)
1. **Dashboard Supabase** → **Table Editor** → **contacts**
2. Clique sur **"Settings"** (icône engrenage)
3. Vérifie **"Enable Row Level Security"** est coché
4. Clique sur **"View policies"**

### 2. Vérifier les Policies RLS
Dans la section policies, tu devrais voir :
```
✅ "Users can insert contacts" - FOR INSERT - WITH CHECK (auth.role() = 'authenticated')
✅ "Service role can read all contacts" - FOR SELECT - USING (auth.role() = 'service_role') 
✅ "Admins can update contacts" - FOR UPDATE - WITH CHECK (auth.role() = 'admin')
```

**Problème probable :** Pas de policy pour les utilisateurs **anonymes** (`anon`).

---

## 🔧 Corrections SQL à Exécuter

### Option 1 : Ajouter Policy pour Anonymes
```sql
-- Créer policy permettant INSERT aux utilisateurs anonymes
CREATE POLICY "Enable insert for anonymous users" ON public.contacts
FOR INSERT WITH CHECK (auth.role() = 'anon');

-- OU plus permissif (attention sécurité)
CREATE POLICY "Enable insert for all users" ON public.contacts
FOR INSERT WITH CHECK (true);
```

### Option 2 : Désactiver RLS temporairement
```sql
-- DANGER : À n'utiliser que pour test
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;
```

### Option 3 : Modifier policy existante
```sql
-- Remplacer policy existante
DROP POLICY IF EXISTS "Users can insert contacts" ON public.contacts;

CREATE POLICY "Users can insert contacts" ON public.contacts
FOR INSERT WITH CHECK (auth.role() IN ('anonymous', 'authenticated', 'anon'));
```

---

## 🧪 Tests dans Dashboard

### Test 1 : Requête API directe
Dans **SQL Editor** :
```sql
-- Tester insertion en tant qu'anonyme
SET LOCAL anon.role = 'anon';
INSERT INTO public.contacts (nom, email, sujet, message, consent_rgpd)
VALUES ('Test Dashboard', 'test@dashboard.com', 'Test direct', 'Message test', true);
```

### Test 2 : Vérifier Permissions
```sql
-- Lister les policies sur la table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'contacts';
```

---

## 🚀 Solution Rapide

1. **Dashboard** → **Authentication** → **Settings**
2. Vérifie **"Enable email confirmations"** est **OFF** (pour tests)
3. **SQL Editor** → Exécute :
```sql
CREATE POLICY "Allow anonymous insert" ON public.contacts
FOR INSERT WITH CHECK (true);
```

4. Teste le formulaire à nouveau

---

## ⚠️ Sécurité

**Ne jamais utiliser `WITH CHECK (true)` en production !**

En production, utilise plutôt :
```sql
CREATE POLICY "Allow anonymous insert" ON public.contacts
FOR INSERT WITH CHECK (
    nom IS NOT NULL AND 
    email IS NOT NULL AND 
    consent_rgpd = true
);
```

---

**Teste d'abord avec la solution rapide, puis sécurise.**