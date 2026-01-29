-- RÉACTIVATION RLS CORRECTE - basé sur ce qui fonctionne
-- À exécuter dans Supabase Dashboard > SQL Editor

-- ÉTAPE 1: Réactiver RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 2: Politique INSERT qui fonctionne (copiée du test réussi)
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

-- ÉTAPE 3: Permissions qui marchent
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;

-- ÉTAPE 4: Validation
SELECT 
    policyname,
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'contacts';

SELECT 
    grantee,
    privilege_type
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';