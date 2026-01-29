-- Vérifier si RLS est activé sur la table contacts
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'contacts';

-- Si rowsecurity = false, activer RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Confirmer que RLS est maintenant activé
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'contacts';