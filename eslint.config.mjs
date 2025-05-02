import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // Configurações base
    ...compat.extends(
        'next/core-web-vitals',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended'
    ),

    // Configurações  para testes
    {
        files: [
            '**/__tests__/**/*.{js,jsx,ts,tsx}',
            '**/*.{spec,test}.{js,jsx,ts,tsx}',
        ],
        plugins: {
            'testing-library': testingLibrary,
            'jest-dom': jestDom,
        },
        rules: {
            'testing-library/await-async-queries': 'error',
            'testing-library/no-await-sync-queries': 'error',
            'testing-library/no-debugging-utils': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            'jest-dom/prefer-checked': 'error',
            'jest-dom/prefer-enabled-disabled': 'error',
            'jest-dom/prefer-required': 'error',
            'jest-dom/prefer-to-have-attribute': 'error',
        },
    },
];

export default eslintConfig;
