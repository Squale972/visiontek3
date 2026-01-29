-- Test 1: Structure table (corrigé)
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'contacts'
ORDER BY ordinal_position;

-- Test 2: Contraintes (corrigé - ambiguïté résolue)
SELECT 
    cc.constraint_name,
    cc.constraint_type,
    cc.check_clause
FROM information_schema.check_constraints cc
JOIN information_schema.constraint_column_usage ccu 
  ON cc.constraint_name = ccu.constraint_name
WHERE ccu.table_schema = 'public' 
  AND ccu.table_name = 'contacts';

-- Test 3: Index
SELECT 
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename = 'contacts' 
  AND schemaname = 'public';

-- Test 4: Politiques RLS
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'contacts';