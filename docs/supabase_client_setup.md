# Installation Client Supabase

## Package Installation
```bash
npm install @supabase/supabase-js
```

## Configuration Environment Variables
```bash
# .env.local
REACT_APP_SUPABASE_URL=https://votre-projet.supabase.co
REACT_APP_SUPABASE_ANON_KEY=votre-clé-anon-publique
```

## Test Insertion Simple
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

// Test insertion
const testData = {
  nom: 'Test Visiontek',
  email: 'test@visiontek.com',
  sujet: 'Test backend setup',
  message: 'Test message from Supabase integration',
  consent_rgpd: true
};

const { data, error } = await supabase
  .from('contacts')
  .insert([testData])
  .select();

if (error) {
  console.error('Erreur insertion:', error);
} else {
  console.log('Contact créé avec ID:', data[0]?.id);
}
```