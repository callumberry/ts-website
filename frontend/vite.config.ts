import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      //change ip to current ip address
      '/api': 'http://192.168.2.46:5000', // Proxy requests to your Flask backend
      '/socket.io': {
        target: 'http://192.168.2.46:5000',
        changeOrigin: true,
        ws: true,
      },
    },
  },
})
