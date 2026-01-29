-- SOLUTION RLS BASÉE SUR RÉALITÉ
-- On sait que l'insertion fonctionne, il faut juste autoriser anon

-- 1. S'assurer que RLS est activé
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 2. Supprimer anciennes politiques
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

-- 3. Politique INSERT SIMPLE pour anon
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- 4. Politique SELECT pour authenticated uniquement (sécurité)
CREATE POLICY "Authenticated users can view contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- 5. Permissions explicites
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT, SELECT ON public.contacts TO anon;

-- 6. Validation
SELECT 'RLS:' as info, rowsecurity FROM pg_tables WHERE tablename = 'contacts';
SELECT 'POLICIES:' as info, policyname, roles, cmd FROM pg_policies WHERE tablename = 'contacts';
SELECT 'PERMISSIONS:' as info, grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'contacts';