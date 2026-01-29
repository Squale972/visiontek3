# Test API Direct sans RLS
curl -X POST 'https://xkgletgkldebpsrhakuw.supabase.co/rest/v1/contacts' \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2xldGdrbGRlYnBzcmhha3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjgwMzgsImV4cCI6MjA4NTEwNDAzOH0.r_Dpr2T86ENvt1NcRMke-TOwZ9vNhxpOCa4Bueo9glo" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2xldGdrbGRlYnBzcmhha3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjgwMzgsImV4cCI6MjA4NTEwNDAzOH0.r_Dpr2T86ENvt1NcRMke-TOwZ9vNhxpOCa4Bueo9glo" \
  -H "Content-Type: application/json" \
  -d '{"name": "Test cURL", "email": "curl@test.com", "subject": "Test direct", "message": "Test depuis curl"}'