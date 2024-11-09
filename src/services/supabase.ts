import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ckfqzevruowvzolmihej.supabase.co";
//const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZnF6ZXZydW93dnpvbG1paGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0Mjg4NDEsImV4cCI6MjA0NjAwNDg0MX0.6lSuxgXxSDPctGnAxTRuG5w0JbuZyvAnLOKYEEHcvBg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
