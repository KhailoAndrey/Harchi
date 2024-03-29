import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from '@rollup/plugin-image';
import ViteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteTsconfigPaths(),
    {
      ...image(),
      enforce: 'pre',
    },
  ],
  base: 'Harchi',
});
