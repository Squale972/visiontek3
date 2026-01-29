# État Phase 1B - Table Supabase à Créer

## 🎯 Objectif
Créer la table `contacts` dans Supabase avec Row Level Security activé.

---

## 📋 Étapes Simples (15 minutes)

### 🌐 Option 1: Supabase Dashboard (Recommandée)

#### Étape 1: Accès Dashboard
1. **URL** : https://app.supabase.com
2. **Connexion** : Email + mot de passe Supabase
3. **Projet** : Sélectionner "Visiontek"

#### Étape 2: SQL Editor
1. **Menu gauche** → "SQL Editor"
2. **Vérifier** : "public" sélectionné en haut

#### Étape 3: Copier-coller le code
```sql
-- Créer table contacts
CREATE TABLE public.contacts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    nom text NOT NULL,
    email text NOT NULL,
    sujet text,
    message text NOT NULL,
    source_url text,
    consent_rgpd boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    processed boolean DEFAULT false
);

-- Activer RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Politiques
CREATE POLICY "Users can insert contacts" ON public.contacts
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Service role can read all contacts" ON public.contacts
FOR SELECT USING (auth.role() = 'service_role');
```

#### Étape 4: Exécuter
1. **Cliquer** : bouton "RUN"
2. **Vérifier** : "Success" en bas
3. **Message** : Table créée avec succès

---

### 🔧 Option 2: Vérification

#### Confirmer la création
```sql
-- Vérifier la table
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'contacts' 
AND table_schema = 'public'
ORDER BY ordinal_position;
```

---

## ✅ Validation Terminée

### Après création réussie :
1. **Votre table est prête** pour recevoir les soumissions
2. **Le formulaire React** peut maintenant insérer des données
3. **Rendez-vous sur** http://localhost:5175/#contact pour tester

---

## 📞 En cas de problème

### Erreurs fréquentes :
- **Permission denied** : Vérifier que vous êtes bien connecté
- **Table exists** : Utiliser un autre nom ou supprimer d'abord
- **Syntax error** : Vérifier la copie du code SQL

---

**15 minutes suffisent pour créer la table. Suivez les étapes ci-dessus.**