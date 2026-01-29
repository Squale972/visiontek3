# Création Table Contacts Supabase - Guide Complet

## 🎯 Objectif
Créer manuellement la table `contacts` dans votre base de données Supabase avec Row Level Security activé.

---

## 📋 Méthodes Disponibles

### Méthode 1: Via Supabase Dashboard (Recommandé)

#### Étape 1: Accéder au SQL Editor
1. **Se connecter** à https://app.supabase.com
2. **Sélectionner votre projet** Visiontek
3. **Aller dans SQL Editor** : Menu de gauche → SQL Editor

#### Étape 2: Créer la table
```sql
-- Créer la table contacts avec tous les champs requis
CREATE TABLE public.contacts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    nom text NOT NULL CHECK (length(nom) <= 100),
    prenom text CHECK (length(prenom) <= 100),
    email text NOT NULL CHECK (length(email) <= 255),
    telephone text CHECK (length(telephone) <= 20),
    sujet text CHECK (length(sujet) <= 200),
    message text NOT NULL CHECK (length(message) <= 2000),
    source_url text,
    ip_address text,
    user_agent text,
    consent_rgpd boolean DEFAULT true NOT NULL,
    created_at timestamptz DEFAULT now(),
    processed boolean DEFAULT false,
    processed_at timestamptz,
    assigned_to text,
    tags text[],
    priority integer DEFAULT 1 CHECK (priority IN (1, 2, 3)),
    status text DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'en_cours', 'traite', 'archive'))
);

-- Créer les index pour performance
CREATE INDEX idx_contacts_email ON public.contacts(email);
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON public.contacts(status);

-- Activer Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
```

#### Étape 3: Créer les politiques RLS
```sql
-- Politique pour les utilisateurs authentifiés (insertion)
CREATE POLICY "Users can insert contacts" ON public.contacts
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Politique pour le service role (lecture complète)
CREATE POLICY "Service role can read all contacts" ON public.contacts
FOR SELECT USING (auth.role() = 'service_role');

-- Politique pour les administrateurs (mise à jour)
CREATE POLICY "Admins can update contacts" ON public.contacts
FOR UPDATE USING (auth.role() = 'admin') OR auth.role() = 'service_role';
```

#### Étape 4: Vérifier la création
```sql
-- Vérifier que la table existe
SELECT table_name, table_schema 
FROM information_schema.tables 
WHERE table_name = 'contacts' 
AND table_schema = 'public';

-- Vérifier les colonnes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contacts' 
AND table_schema = 'public'
ORDER BY ordinal_position;
```

---

### Méthode 2: Via le fichier SQL (Alternative)

#### Utiliser le fichier pré-créé
1. **Ouvrir** `docs/supabase_table_contacts.sql`
2. **Copier tout le contenu**
3. **Coller dans SQL Editor**
4. **Exécuter** (bouton RUN)

---

## ✅ Validation de la Table

### Test 1: Vérification structure
```sql
-- Liste des colonnes
\d+ public.contacts

-- Description de la table
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default
FROM information_schema.columns 
WHERE table_name = 'contacts' 
ORDER BY ordinal_position;
```

### Test 2: Insertion de test
```sql
-- Insertion d'un enregistrement de test
INSERT INTO public.contacts 
    (nom, email, sujet, message) 
VALUES 
    ('Test Visiontek', 'test@visiontek.com', 'Test création table', 'Test de la table contacts');

-- Vérification
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 1;
```

### Test 3: Vérification RLS
```sql
-- Test avec rôle anonyme (échec attendu)
SET LOCAL ROLE TO anon;
SELECT * FROM public.contacts LIMIT 1;

-- Test avec rôle service (succès attendu)
SET LOCAL ROLE TO service_role;
SELECT * FROM public.contacts LIMIT 1;
```

---

## 🛡️ Politiques RLS Expliquées

### Policy 1: Users can insert contacts
- **Rôle**: authenticated (utilisateurs connectés)
- **Action**: INSERT
- **Condition**: Vérifie que seul les utilisateurs authentifiés peuvent insérer
- **Protection**: Empêche les insertions anonymes non autorisées

### Policy 2: Service role can read all contacts
- **Rôle**: service_role (services backend comme n8n)
- **Action**: SELECT
- **Condition**: Permet au service rôle de lire toutes les données
- **Usage**: Pour n8n workflow et dashboard admin

### Policy 3: Admins can update contacts
- **Rôle**: admin ou service_role
- **Action**: UPDATE
- **Condition**: Permet aux admins de modifier le statut des contacts
- **Usage**: Pour marquer comme traité, assigner, etc.

---

## 🔧 Configuration Additionnelle

### Trigger automatique (optionnel)
```sql
-- Trigger pour timestamp updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language plpgsql;

CREATE TRIGGER update_contacts_updated_at 
BEFORE UPDATE ON public.contacts 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Vue simplifiée pour le frontend
```sql
-- Vue avec seulement les colonnes publiques
CREATE VIEW public.contacts_view AS
SELECT 
    id, nom, email, sujet, message, 
    created_at, processed, status
FROM public.contacts 
WHERE processed = false;
```

---

## 📊 Résultats Attendus

### Après exécution réussie:
- ✅ **Table contacts créée** dans schema public
- ✅ **RLS activé** avec 3 politiques sécurisées
- ✅ **Indexs créés** pour performance
- ✅ **Structure prête** pour réception formulaires
- ✅ **Compatibilité frontend** avec variables d'environnement

### Vérification finale:
```sql
-- Confirmer tout est correct
SELECT 
    COUNT(*) as total_policies,
    COUNT(*) as enabled_rls
FROM pg_policies 
WHERE tablename = 'contacts';

SELECT COUNT(*) as tables_created 
FROM information_schema.tables 
WHERE table_name = 'contacts' 
AND table_schema = 'public';
```

---

## 🚀 Prochaine Étape

Une fois la table créée et validée:

1. **Tester le formulaire React** avec soumission Supabase
2. **Vérifier les données** dans Supabase Dashboard
3. **Configurer workflow n8n** pour écouter les nouvelles insertions
4. **Activer les notifications** automatiques

---

**La table est maintenant prête à recevoir les soumissions du formulaire React !**