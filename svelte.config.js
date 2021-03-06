	// import { AmbientLight, Pass, Canvas, Group, PerspectiveCamera, PointLight } from 'threlte';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true,
			pages: 'docs',
			assets: 'docs'
		}),
		vite: {
			ssr: {
				noExternal: ['three']
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
		   build: {
			   rollupOptions: {
				   output: {
						manualChunks: {
							threlte: ['threlte']
						}
					}
				}
			}
		},
		prerender: {
			default: true
		}
	},
	preprocess: [
		preprocess({
			sourceMap: true,
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],
	compilerOptions: {
		enableSourcemap: true
	}
};

export default config;
