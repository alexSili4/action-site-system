import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
