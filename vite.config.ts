import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		__S3_URL__: JSON.stringify('https://designpatternsystems.s3.us-east-2.amazonaws.com'),
	},
	server: {
		proxy: {
			'/patterns': {
        target: import.meta.env.VITE_SERVER,
        changeOrigin: true,
				secure: false
      },
			'/schema': {
        target: import.meta.env.VITE_SERVER,
        changeOrigin: true,
				secure: false
      },
			'/pattern': {
				target: import.meta.env.VITE_SERVER,
        changeOrigin: true,
				secure: false
			},
		}
	},
	plugins: [preact()],
});
