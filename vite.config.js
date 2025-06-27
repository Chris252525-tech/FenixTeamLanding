import { defineConfig } from 'vite'

export default defineConfig({
  base: '/FenixTeamLanding/',
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
              entryFileNames: 'assets/[name]-[hash].js,'
        },
      },
    },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: 'all'
  },
  preview: {
    host: '0.0.0.0',
    port: 4000,
    allowedHosts: 'all'
  }
})

