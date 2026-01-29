// Test Supabase directement dans la console du navigateur
// Ouvrez votre site (localhost:5175), F12 > Console, copiez-collez ce code :

(async () => {
  console.log('🧪 Test Supabase direct...');
  
  try {
    // Import du client Supabase
    const { createClient } = await import('@supabase/supabase-js');
    
    // Configuration (doit matcher votre .env.local)
    const supabase = createClient(
      'https://xkgletgkldebpsrhakuw.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2xldGdrbGRlYnBzcmhha3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjgwMzgsImV4cCI6MjA4NTEwNDAzOH0.r_Dpr2T86ENvt1NcRMke-TOwZ9vNhxpOCa4Bueo9glo'
    );
    
    console.log('✅ Client Supabase créé');
    
    // Test d'insertion
    const testData = {
      name: 'Test Console Direct',
      email: 'console@test.com',
      subject: 'Test depuis console',
      message: 'Message de test direct depuis console navigateur'
    };
    
    console.log('📤 Données test:', testData);
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([testData])
      .select();
    
    if (error) {
      console.error('❌ Erreur insertion:', error);
      return;
    }
    
    console.log('✅ Succès! Données insérées:', data);
    
  } catch (err) {
    console.error('❌ Erreur test:', err);
  }
})();