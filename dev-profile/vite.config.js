import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import PagesSitemap from 'vite-plugin-pages-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    PagesSitemap({
      hostname: 'https://tantelymr.netlify.app',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', '33S.ico'],
      manifest: {
        name: 'Tantely Rabemananjara — Developer Page',
        short_name: 'TantelyDev',
        description: '>.<!',
        theme_color: 'white',
        background_color: 'black',
        display: 'standalone',
        orientation: 'portrait',
        id: '33-Aurelius',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '33S.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: '33S2.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: '33S2.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ],
        url_handlers: [
          {
            origin: 'https://tantely.netlify.app'
          }
        ]
      }
    })
    // ...existing code...
  ],
  server: {
    host: true,
    allowedHosts: ['127.0.0.1', 'localhost', 'tantely.netfify.app'],
    port: 5173,
  },
})
