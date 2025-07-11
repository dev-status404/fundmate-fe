import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main',
      remotes: {
        admin: 'http://localhost:5001/assets/remoteEntry.js',
        funding: 'http://localhost:5002/assets/remoteEntry.js',
        mypage: 'http://localhost:5003/assets/remoteEntry.js',
        payment: 'http://localhost:5004/assets/remoteEntry.js',
        statistics: 'http://localhost:5005/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
