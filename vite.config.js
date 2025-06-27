import { defineConfig } from 'vite'

export default defineConfig({
  base: '/FenixTeamLanding/',
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

