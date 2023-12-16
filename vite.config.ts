import path from 'path';
import devtools from 'solid-devtools/vite';
import { defineConfig, loadEnv } from 'vite';
import glsl from 'vite-plugin-glsl';
import solid from 'vite-plugin-solid';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [
            devtools({
                autoname: true,
                locator: {
                    key: 'Control',
                    targetIDE: 'vscode',
                    componentLocation: true,
                    jsxLocation: true,
                },
            }),
            solid(),
            glsl(),
        ],
        base: env.BASE_URL || '/',
    };
});
