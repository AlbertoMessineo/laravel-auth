import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

// resolve: {
//         alias: {
//             '~resources': '/resources/',
//             '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
//         }
//     },

export default defineConfig({
    
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    
});
