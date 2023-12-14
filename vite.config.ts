import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import solid from 'vite-plugin-solid';

export default defineConfig({
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
    base: '/3d-app-demo',
});
