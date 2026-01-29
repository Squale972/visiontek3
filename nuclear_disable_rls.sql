-- SOLUTION NUCLÉAIRE COMPLÈTE - DÉSACTIVER RLS TEMPORAIREMENT
-- À exécuter dans Supabase Dashboard > SQL Editor

-- ÉTAPE 1: Désactiver complètement RLS (temporaire)
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2: Supprimer toutes les politiques
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

-- ÉTAPE 3: Donner permissions directes (sans RLS)
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;

-- ÉTAPE 4: Test d'insertion direct
INSERT INTO public.contacts (name, email, subject, message)
VALUES ('Test Direct', 'direct@test.com', 'Test SQL', 'Test depuis dashboard');

-- ÉTAPE 5: Vérifier résultat
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 3;

-- ÉTAPE 6: Vérifier état RLS
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'contacts';

-- ATTENTION : RLS est DÉSACTIVÉ pour test
-- Si ça fonctionne, on le réactivera correctement après