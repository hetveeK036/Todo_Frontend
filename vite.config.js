import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),     [
    'docusaurus-plugin-dotenv',
    {
        path: "./.env", 
        systemvars: true, 
    }
  ]],

})
