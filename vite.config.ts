import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist',
		rollupOptions: {
			output: {
				format: 'es'
			}
		}
	}
});
