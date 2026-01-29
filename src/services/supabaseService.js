// Service Supabase isolé - import dynamique
class SupabaseService {
  constructor() {
    this.client = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return this.client;

    try {
      console.log('🔧 Import dynamique Supabase...');
      const { createClient } = await import('@supabase/supabase-js');
      
      const url = import.meta.env.VITE_SUPABASE_URL;
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!url || !key) {
        throw new Error('Variables Supabase manquantes');
      }
      
      console.log('🔗 URL Supabase:', url);
      console.log('🔑 Clé Supabase length:', key.length);
      
      this.client = createClient(url, key);
      this.initialized = true;
      
      console.log('✅ Supabase initialisé dynamiquement');
      return this.client;
      
    } catch (error) {
      console.error('❌ Erreur initialisation Supabase:', error);
      throw error;
    }
  }

  async submitContact(formData) {
    try {
      const client = await this.initialize();
      
      // 🔧 CORRECTION : Mapper les champs correctement
      const mappedData = {
        name: formData.nom || formData.name,          // ✅ Utiliser le champ "name" de la table
        email: formData.email,
        subject: formData.sujet || formData.subject,  // ✅ Utiliser le champ "subject" de la table
        message: formData.message,
        created_at: new Date().toISOString()
      };
      
      console.log('📤 Données mappées pour insertion:', mappedData);
      
      const { data: result, error } = await client
        .from('contacts')
        .insert([mappedData])
        .select();
        
      console.log('📥 Réponse Supabase - result:', result);
      console.log('📥 Réponse Supabase - error:', error);
        
      if (error) {
        console.error('❌ Erreur Supabase:', error);
        throw error;
      }
      
      if (!result || result.length === 0) {
        throw new Error('Aucune donnée retournée - possible RLS block');
      }
      
      return result;
      
    } catch (error) {
      console.error('❌ Erreur soumission Supabase:', error);
      throw error;
    }
  }
}

export default new SupabaseService();