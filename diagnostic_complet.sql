-- DIAGNOSTIC COMPLET DE VOTRE CONFIGURATION
-- Exécutez ceci dans Supabase Dashboard et envoyez-moi les résultats

-- 1. État actuel de RLS
SELECT 'RLS STATUS:' as info;
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE tablename = 'contacts';

-- 2. Politiques actuelles
SELECT 'POLICIES:' as info;
SELECT policyname, permissive, roles, cmd, qual, with_check FROM pg_policies WHERE tablename = 'contacts';

-- 3. Permissions actuelles
SELECT 'PERMISSIONS:' as info;
SELECT grantee, privilege_type, is_grantable FROM information_schema.role_table_grants WHERE table_name = 'contacts';

-- 4. Structure de la table
SELECT 'TABLE STRUCTURE:' as info;
SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'contacts' ORDER BY ordinal_position;

-- 5. Test manuel d'insertion
SELECT 'MANUAL TEST:' as info;
-- Décommentez la ligne ci-dessous pour tester (peut échouer si problème)
-- INSERT INTO public.contacts (name, email, subject, message) VALUES ('Test Manual', 'manual@test.com', 'Test SQL', 'Test depuis dashboard');

-- 6. Vérifier les données existantes
SELECT 'EXISTING DATA:' as info;
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 3;