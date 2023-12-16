export const ENV_CONFIG = {
    BASE_URL: import.meta.env.BASE_URL || '/',
    MODE: import.meta.env.MODE || 'development',
    USE_HASH_ROUTER: import.meta.env.USE_HASH_ROUTER === 'true',
} as const;

export const isDevelopment = ENV_CONFIG.MODE === 'development';
export const isProduction = ENV_CONFIG.MODE === 'production';
export const isHashRouter = ENV_CONFIG.USE_HASH_ROUTER;
