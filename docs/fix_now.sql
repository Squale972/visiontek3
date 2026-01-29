-- CORRECTION RLS URGENTE - À EXÉCUTER MAINTENANT
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contacts;

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" 
ON public.contacts 
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT, SELECT ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;