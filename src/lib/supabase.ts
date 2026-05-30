import { createClient } from '@supabase/supabase-js';

// Use placeholders during build if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

// Default client for frontend/basic reads
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for backend operations (like inserting appointments/logs)
export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder';
  return createClient(supabaseUrl, serviceKey);
};
