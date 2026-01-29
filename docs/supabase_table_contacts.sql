# Table Contacts Supabase - Schema SQL

-- Table principale pour les soumissions de formulaire
CREATE TABLE public.contacts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    nom text NOT NULL CHECK (length(nom) <= 100),
    prenom text CHECK (length(prenom) <= 100),
    email text NOT NULL CHECK (length(email) <= 255),
    telephone text CHECK (length(telephone) <= 20),
    sujet text CHECK (length(sujet) <= 200),
    message text NOT NULL CHECK (length(message) <= 2000),
    source_url text,
    ip_address text,
    user_agent text,
    consent_rgpd boolean DEFAULT true NOT NULL,
    created_at timestamptz DEFAULT now(),
    processed boolean DEFAULT false,
    processed_at timestamptz,
    assigned_to text,
    tags text[],
    priority integer DEFAULT 1 CHECK (priority IN (1, 2, 3)),
    status text DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'en_cours', 'traite', 'archive'))
);

-- Index pour performance
CREATE INDEX idx_contacts_email ON public.contacts(email);
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON public.contacts(status);

-- Activer Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Users can insert contacts" ON public.contacts
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Service role can read all contacts" ON public.contacts
FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Admins can update contacts" ON public.contacts
FOR UPDATE WITH CHECK (auth.role() = 'admin');

-- Test insertion
INSERT INTO public.contacts (nom, email, sujet, message) 
VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test message from backend setup');