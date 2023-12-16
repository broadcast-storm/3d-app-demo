export const ENV_CONFIG = {
    BASE_URL: import.meta.env.BASE_URL || '/',
    MODE: import.meta.env.MODE || 'development',
} as const;

export const isDevelopment = ENV_CONFIG.MODE === 'development';
export const isProduction = ENV_CONFIG.MODE === 'production';
