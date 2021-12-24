import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const srcPath = path.resolve('./src');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            assets: path.join(srcPath, 'assets'),
            components: path.join(srcPath, 'components'),
            store: path.join(srcPath, 'store'),
            transformers: path.join(srcPath, 'transformers'),
        },
    },
});
