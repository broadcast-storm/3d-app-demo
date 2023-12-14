import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

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
    ],
    base: '/3d-app-demo',
});
