import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iemdkaqbrdiikwakpxxd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbWRrYXFicmRpaWt3YWtweHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1Nzg1ODcsImV4cCI6MjEwMzE1NDU4N30.GVNr308eibCFaFP2E5T0_CL6pADa3SYfwmCetJiGOHI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)