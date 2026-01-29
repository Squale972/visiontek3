-- ============= SOLUTION RLS DÉFINITIVE =============
-- Exécuter dans Supabase Dashboard > SQL Editor

-- ÉTAPE 1: Supprimer TOUTES les politiques existantes
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

-- ÉTAPE 2: S'assurer que RLS est activé
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 3: Politique INSERT pour les anonymes (CRUCIAL)
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- ÉTAPE 4: Politique SELECT pour les authentifiés uniquement
CREATE POLICY "Enable read access for authenticated users" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- ÉTAPE 5: Donner permissions explicites
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT, SELECT ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;

-- ÉTAPE 6: Validation finale
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'contacts';

SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'contacts';