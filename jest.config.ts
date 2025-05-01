// configuração do Jest com foco em performance

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/src/_tests/$1',
  },

  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  workerIdleMemoryLimit: '512MB',
  maxWorkers: '80%',
};

export default createJestConfig(config);
