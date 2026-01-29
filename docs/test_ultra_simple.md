# Test Ultra-simple Supabase

## 1. Test avec cURL (dans terminal)
```bash
curl -X POST 'https://xkgletgkldebpsrhakuw.supabase.co/rest/v1/contacts' \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2xldGdrbGRlYnBzcmhha3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjgwMzgsImV4cCI6MjA4NTEwNDAzOH0.r_Dpr2T86ENvt1NcRMke-TOwZ9vNhxpOCa4Bueo9glo" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '{"name": "Test cURL", "email": "curl@test.com", "subject": "Test API", "message": "Test depuis curl"}'
```

### Réponses possibles :
- **Succès** : HTTP 201, pas de body
- **Erreur** : HTTP 400/401/403 avec message JSON

## 2. Test dans Supabase Dashboard
Ouvrez votre projet Supabase > SQL Editor et exécutez :
```sql
-- Test insertion directe
INSERT INTO public.contacts (name, email, subject, message)
VALUES ('Test Dashboard', 'dashboard@test.com', 'Test SQL', 'Test depuis dashboard');

-- Vérifier résultat
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 5;
```

## 3. Vérifier état RLS
```sql
SELECT * FROM pg_policies WHERE tablename = 'contacts';
```

## 4. Vérifier permissions
```sql
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';
```