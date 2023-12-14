module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:solid/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'solid'],
    rules: {
        'no-var': 'error',
        'prefer-const': 'warn',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
};
