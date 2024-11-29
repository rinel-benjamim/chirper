import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'node_modules/highlight.js/styles/atom-one-dark.min.css',
                'node_modules/tippy.js/dist/tippy.css'
            ],
            refresh: true,
        }),
    ],
});
