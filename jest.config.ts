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

  // Configurações de performance
  workerIdleMemoryLimit: '512MB',
  maxWorkers: '80%',

  // Configuração do JUnit
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' > ',
        includeConsoleOutput: true,
      },
    ],
  ],
};

export default createJestConfig(config);