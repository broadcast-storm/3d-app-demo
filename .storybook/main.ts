import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        // '@storybook/addon-interactions',
    ],
    framework: {
        name: 'storybook-solidjs-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        builder: '@storybook/builder-vite',
        disableTelemetry: true,
    },
};
export default config;
