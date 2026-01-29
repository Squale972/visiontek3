-- Supprimer toutes les politiques existantes sur la table contacts
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;

-- S'assurer que RLS est activé
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Recréer les politiques CORRECTEMENT
CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Enable read access for all users" 
ON public.contacts 
FOR SELECT 
USING (true);

-- Vérifier que les politiques sont bien créées
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