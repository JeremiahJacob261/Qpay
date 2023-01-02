import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rmplfytqriyigrkknmgo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtcGxmeXRxcml5aWdya2tubWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0MTU0MDEsImV4cCI6MTk4Nzk5MTQwMX0.o77v5k-KPEA0pTwxFyKthT45x7BdSe5D22cDbhQlkMs"
export const supabase = createClient(supabaseUrl,supabaseKey)