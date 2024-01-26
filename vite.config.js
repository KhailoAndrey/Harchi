import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from '@rollup/plugin-image';
import ViteTsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteTsconfigPaths(),
    {
      ...image(),
      enforce: 'pre',
    },
  ],
  base: 'Harchi',
});
