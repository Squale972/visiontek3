-- SOLUTION DÉFINITIVE - VÉRIFICATION COMPLÈTE + RESET
-- Exécuter DANS Supabase Dashboard

-- 1. D'ABORD VÉRIFIER TOUT
SELECT '=== TOUTES LES POLITIQUES ===' as debug;
SELECT policyname, permissive, roles, cmd, qual, with_check FROM pg_policies WHERE tablename = 'contacts';

-- 2. SUPPRIMER TOUTES LES POLITIQUES
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON public.contacts;

-- 3. DÉSACTIVER RLS TEMPORAIREMENT
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;

-- 4. DONNER PERMISSIONS DIRECTES (sans RLS)
REVOKE ALL ON public.contacts FROM anon;
REVOKE ALL ON public.contacts FROM authenticated;
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;

-- 5. TEST INSERTION DIRECTE
INSERT INTO public.contacts (name, email, subject, message) 
VALUES ('Test Final', 'final@test.com', 'Test Final', 'Test après reset');

-- 6. VÉRIFIER RÉSULTAT
SELECT '=== DONNÉES APRÈS TEST ===' as debug;
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 3;

-- 7. MAINTENANT RÉACTIVER RLS CORRECTEMENT
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 8. CRÉER POLITIQUE INSERT SPÉCIFIQUE
CREATE POLICY "Allow any insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- 9. CRÉER POLITIQUE SELECT POUR ADMIN
CREATE POLICY "Admin can view all" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- 10. VALIDATION FINALE
SELECT '=== CONFIG FINALE ===' as debug;
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE tablename = 'contacts';
SELECT policyname, roles, cmd FROM pg_policies WHERE tablename = 'contacts';