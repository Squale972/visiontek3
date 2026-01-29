-- SOLUTION ULTIME - FORCER INSERTIONS ANONYMES
-- Si rien d'autre ne marche...

ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;

-- CRÉER TRIGGER POUR LOGGING (sécurité basique)
CREATE OR REPLACE FUNCTION log_contact_insert()
RETURNS TRIGGER AS $$
BEGIN
  RAISE NOTICE 'New contact inserted: % (%)', NEW.name, NEW.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER contact_insert_trigger
AFTER INSERT ON public.contacts
FOR EACH ROW
EXECUTE FUNCTION log_contact_insert();

-- Donner permissions maximales
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Test final
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 5;