-- CORRECTION RLS URGENTE - À EXÉCUTER DANS SUPABASE DASHBOARD
-- URL : https://supabase.com/dashboard/project/xkgletgkldebpsrhakuw/sql/new

-- ÉTAPE 1: Supprimer toutes les politiques existantes sur la table contacts
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

-- ÉTAPE 2: S'assurer que RLS est activé
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 3: Créer la politique INSERT pour les utilisateurs anonymes (CRUCIAL)
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- ÉTAPE 4: Donner les permissions explicites pour les insertions anonymes
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.contacts TO anon;

-- ÉTAPE 5: Validation - vérifier que la politique est bien créée
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'contacts';

-- ÉTAPE 6: Validation - vérifier les permissions
SELECT 
    grantee,
    privilege_type,
    is_grantable
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts' 
AND grantee = 'anon';

-- MESSAGE DE SUCCÈS ATTENDU :
-- La ligne "Allow anonymous insert" doit apparaître dans pg_policies
-- Les permissions INSERT doivent apparaître pour le rôle anon