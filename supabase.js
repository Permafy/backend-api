import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY; // O la clave correspondiente de tu servidor

export const supabase = createClient(supabaseUrl, supabaseKey);