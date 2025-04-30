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
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:jest-dom/recommended'
  ),
  {
    plugins: {
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    rules: {
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/no-debugging-utils': 'warn',
    },
    files: [
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      '**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    ...testingLibrary.configs['flat/react'],
  },
];

export default eslintConfig;
