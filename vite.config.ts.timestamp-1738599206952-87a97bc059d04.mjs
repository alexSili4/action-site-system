// vite.config.ts
import { defineConfig } from "file:///D:/work/action-site-system/node_modules/vite/dist/node/index.js";
import react from "file:///D:/work/action-site-system/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/work/action-site-system/node_modules/vite-plugin-svgr/dist/index.js";
import viteImagemin from "file:///D:/work/action-site-system/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: true }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@AnimationBlocks": "/src/components/AnimationBlocks",
      "@RegisterCodePageComponents": "/src/components/RegisterCodePage",
      "@GeneralComponents": "/src/components/General",
      "@CabinetPageComponents": "/src/components/CabinetPage",
      "@PromotionsPageComponents": "/src/components/PromotionsPage",
      "@MainPageComponents": "/src/components/MainPage",
      "@PromotionDetailsPageComponents": "/src/components/PromotionDetailsPage",
      "@ErrorPageComponents": "/src/components/ErrorPage",
      "@UserCertificatePageComponents": "/src/components/UserCertificatePage",
      "@UserPrizePageComponents": "/src/components/UserPrizePage",
      "@UserCodePageComponents": "/src/components/UserCodePage"
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "dist/[name].js",
        entryFileNames: "dist/[name].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || "";
          if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) {
            return "img/app/[name]-[hash][extname]";
          }
          return "dist/[name][extname]";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrXFxcXGFjdGlvbi1zaXRlLXN5c3RlbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd29ya1xcXFxhY3Rpb24tc2l0ZS1zeXN0ZW1cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmsvYWN0aW9uLXNpdGUtc3lzdGVtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHN2Z3IoKSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgfSxcclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgeyBuYW1lOiAncmVtb3ZlVmlld0JveCcsIGFjdGl2ZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLCBhY3RpdmU6IHRydWUgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6ICcvc3JjJyxcclxuICAgICAgJ0BBbmltYXRpb25CbG9ja3MnOiAnL3NyYy9jb21wb25lbnRzL0FuaW1hdGlvbkJsb2NrcycsXHJcbiAgICAgICdAUmVnaXN0ZXJDb2RlUGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyQ29kZVBhZ2UnLFxyXG4gICAgICAnQEdlbmVyYWxDb21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cy9HZW5lcmFsJyxcclxuICAgICAgJ0BDYWJpbmV0UGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL0NhYmluZXRQYWdlJyxcclxuICAgICAgJ0BQcm9tb3Rpb25zUGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL1Byb21vdGlvbnNQYWdlJyxcclxuICAgICAgJ0BNYWluUGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL01haW5QYWdlJyxcclxuICAgICAgJ0BQcm9tb3Rpb25EZXRhaWxzUGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL1Byb21vdGlvbkRldGFpbHNQYWdlJyxcclxuICAgICAgJ0BFcnJvclBhZ2VDb21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cy9FcnJvclBhZ2UnLFxyXG4gICAgICAnQFVzZXJDZXJ0aWZpY2F0ZVBhZ2VDb21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cy9Vc2VyQ2VydGlmaWNhdGVQYWdlJyxcclxuICAgICAgJ0BVc2VyUHJpemVQYWdlQ29tcG9uZW50cyc6ICcvc3JjL2NvbXBvbmVudHMvVXNlclByaXplUGFnZScsXHJcbiAgICAgICdAVXNlckNvZGVQYWdlQ29tcG9uZW50cyc6ICcvc3JjL2NvbXBvbmVudHMvVXNlckNvZGVQYWdlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Rpc3QvW25hbWVdLmpzJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Rpc3QvW25hbWVdLmpzJyxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBhc3NldEluZm8ubmFtZSB8fCAnJztcclxuXHJcbiAgICAgICAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoJy5wbmcnKSB8fCBmaWxlTmFtZS5lbmRzV2l0aCgnLmpwZycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaW1nL2FwcC9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gJ2Rpc3QvW25hbWVdW2V4dG5hbWVdJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLG9CQUFvQjtBQUNuUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLGFBQWE7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQLEVBQUUsTUFBTSxpQkFBaUIsUUFBUSxNQUFNO0FBQUEsVUFDdkMsRUFBRSxNQUFNLG9CQUFvQixRQUFRLEtBQUs7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxvQkFBb0I7QUFBQSxNQUNwQiwrQkFBK0I7QUFBQSxNQUMvQixzQkFBc0I7QUFBQSxNQUN0QiwwQkFBMEI7QUFBQSxNQUMxQiw2QkFBNkI7QUFBQSxNQUM3Qix1QkFBdUI7QUFBQSxNQUN2QixtQ0FBbUM7QUFBQSxNQUNuQyx3QkFBd0I7QUFBQSxNQUN4QixrQ0FBa0M7QUFBQSxNQUNsQyw0QkFBNEI7QUFBQSxNQUM1QiwyQkFBMkI7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsZ0JBQU0sV0FBVyxVQUFVLFFBQVE7QUFFbkMsY0FBSSxTQUFTLFNBQVMsTUFBTSxLQUFLLFNBQVMsU0FBUyxNQUFNLEdBQUc7QUFDMUQsbUJBQU87QUFBQSxVQUNUO0FBRUEsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
