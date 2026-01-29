-- ============= DIAGNOSTIC COMPLET SUPABASE RLS =============

-- 1. Vérifier structure de la table
\d+ public.contacts;

-- 2. Vérifier état RLS
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'contacts';

-- 3. Vérifier toutes les politiques actuelles
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

-- 4. Vérifier permissions utilisateur anonyme
SELECT 
    grantee,
    table_schema,
    table_name,
    privilege_type,
    is_grantable
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts' 
AND grantee = 'anon';

-- 5. Test d'insertion (exécuter en tant que role anon)
-- SET ROLE anon;
-- INSERT INTO public.contacts (name, email, subject, message, created_at) 
-- VALUES ('Test', 'test@example.com', 'Test', 'Test message', NOW());

-- 6. Résultat du test
-- SELECT * FROM public.contacts WHERE name = 'Test';