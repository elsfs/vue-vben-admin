import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig(async (env) => {
  const isBuild = env.command === 'build';
  return {
    server: {
      // allow access to the host file system for the server
      fs: {
        allow: ['.', '../shared', 'dist'],
      },
    },
    resolve: {
      alias: {
        remote: fileURLToPath(new URL('.', import.meta.url)),
        '@': path.resolve(__dirname, './src'),
        shared: path.resolve(__dirname, '../shared/shared'),
      },
    },
    build: {
      target: 'chrome89',
    },
    plugins: [
      ...(isBuild
        ? [
            federation({
              name: 'host',
              filename: 'remoteEntry.js',
              exposes: {},
              remotes: {
                remote: '/spd-drug/assets/module.js',
              },
            }),
          ]
        : []),
      vue(),
      vueJsx(),
    ],
  };
});
