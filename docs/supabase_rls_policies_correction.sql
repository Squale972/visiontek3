-- Politique UPDATE pour administrateurs
CREATE POLICY "Admins can update contacts" ON public.contacts
FOR UPDATE USING (
  auth.role() = 'admin' OR 
  auth.role() = 'service_role'
);

-- Politique DELETE pour administrateurs  
CREATE POLICY "Admins can delete contacts" ON public.contacts
FOR DELETE USING (
  auth.role() = 'admin' OR 
  auth.role() = 'service_role'
);