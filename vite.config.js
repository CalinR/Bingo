import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'docs');

const changeAssetPathPlugin = (rootFolder) => {
  if (!rootFolder) return

  return {
    name: 'changeAssetPathPlugin',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html'];
      const playerHtml = bundle['player/index.html'];
      indexHtml.source = indexHtml.source.replace(/href=\"\/assets\//g, 'href="/' + rootFolder + '/assets/').replace(/src=\"\/assets\//g, 'src="/' + rootFolder + '/assets/');
      playerHtml.source = playerHtml.source.replace(/href=\"\/assets\//g, 'href="/' + rootFolder + '/assets/').replace(/src=\"\/assets\//g, 'src="/' + rootFolder + '/assets/');
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react(), changeAssetPathPlugin('Bingo')],
  server: {
    port: 8080,
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        player: resolve(root, 'player', 'index.html'),
      },
    },
  },
});
