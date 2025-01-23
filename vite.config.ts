import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@AnimationBlocks': '/src/components/AnimationBlocks',
      '@RegisterCodePageComponents': '/src/components/RegisterCodePage',
      '@GeneralComponents': '/src/components/General',
      '@CabinetPageComponents': '/src/components/CabinetPage',
      '@PromotionsPageComponents': '/src/components/PromotionsPage',
      '@MainPageComponents': '/src/components/MainPage',
      '@PromotionDetailsPageComponents': '/src/components/PromotionDetailsPage',
      '@ErrorPageComponents': '/src/components/ErrorPage',
      '@UserCertificatePageComponents': '/src/components/UserCertificatePage',
      '@UserPrizePageComponents': '/src/components/UserPrizePage',
      '@UserCodePageComponents': '/src/components/UserCodePage',
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'dist/[name].js',
        entryFileNames: 'dist/[name].js',
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || '';

          if (fileName.endsWith('.png') || fileName.endsWith('.jpg')) {
            return 'img/app/[name]-[hash][extname]';
          }

          return 'dist/[name][extname]';
        },
      },
    },
  },
});
