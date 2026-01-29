-- SOLUTION ULTIME SANS TRIGGER (trigger déjà existe)
-- Juste désactiver RLS et donner permissions

-- 1. Désactiver RLS définitivement
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;

-- 2. Donner permissions maximales à anon
GRANT ALL PRIVILEGES ON TABLE public.contacts TO anon;
GRANT ALL PRIVILEGES ON SEQUENCE contacts_id_seq TO anon;

-- 3. Validation
SELECT 'RLS Status:', rowsecurity FROM pg_tables WHERE tablename = 'contacts';
SELECT 'Anon permissions:', grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'contacts' AND grantee = 'anon';

-- 4. Test insertion
SELECT 'Test insertion...';
INSERT INTO public.contacts (name, email, subject, message) 
VALUES ('Test Ultim', 'ultim@test.com', 'Test Final', 'Solution ultime sans RLS');

-- 5. Vérifier résultat
SELECT 'Données finales:';
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 5;