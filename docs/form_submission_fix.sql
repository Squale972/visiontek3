-- Correction du problème de soumission du formulaire

-- Problème identifié dans Contact.jsx ligne 57-58:
-- entreprise et service ne correspondent pas aux colonnes de la table

-- Table actuelle a les colonnes:
-- nom, email, telephone, sujet, message, source_url, ip_address, user_agent, consent_rgpd

-- Correction mapping:
-- entreprise → PAS de colonne correspondante (à ajouter ou ignorer)
-- service → PAS de colonne correspondante (inclu dans sujet)

-- Solution 1: Ajouter les colonnes manquantes
ALTER TABLE public.contacts 
ADD COLUMN entreprise text CHECK (length(entreprise) <= 100),
ADD COLUMN service text CHECK (length(service) <= 50);

-- Solution 2: Modifier le code pour utiliser les colonnes existantes
-- Dans Contact.jsx ligne 53-64, utiliser:
const submissionData = {
  nom: formData.name,
  email: formData.email,
  sujet: `Demande ${formData.service || 'générale'}${formData.company ? ' - ' + formData.company : ''}`,
  message: formData.message,
  source_url: window.location.href,
  user_agent: navigator.userAgent,
  consent_rgpd: formData.consent_rgpd
};