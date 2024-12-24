import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true, // This binds the server to all network interfaces (0.0.0.0).
    port:3000
  },
  base:"/octalume", 
})
