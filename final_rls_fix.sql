-- SOLUTION RLS DÉFINITIVE EXACTE
-- À exécuter DANS Supabase Dashboard > SQL Editor
-- URL: https://supabase.com/dashboard/project/xkgletgkldebpsrhakuw/sql/new

-- ÉTAPE 1: Nettoyage complet
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

-- ÉTAPE 2: RÉACTIVER RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 3: Politique INSERT QUI FONCTIONNE (copie exacte du test réussi)
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- ÉTAPE 4: Permissions QUI MARCHANT
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;

-- ÉTAPE 5: Validation finale
SELECT 'POLICIES:' as info;
SELECT policyname, roles, cmd FROM pg_policies WHERE tablename = 'contacts';

SELECT 'PERMISSIONS:' as info;
SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'contacts';

SELECT 'RLS STATUS:' as info;
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE tablename = 'contacts';