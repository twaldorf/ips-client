import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			// '/patterns': {
      //   target: "http://localhost:8000",
      //   changeOrigin: true,
			// 	secure: false
      // },
			// '/schema': {
      //   target: import.meta.env.VITE_VERCEL_SERVER,
      //   changeOrigin: true,
			// 	secure: false
      // },
			'/patterns': {
				target: import.meta.env.VITE_SERVER_URL,
        changeOrigin: true,
				secure: false
			},
		}
	},
	plugins: [preact()],
});
