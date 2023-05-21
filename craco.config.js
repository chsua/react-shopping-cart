/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],

  jest: {
    configure: {
      moduleNameMapper: {
        '^\\@Constants/(.*)$': '<rootDir>/src/constants/$1',
        '^\\@Hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^\\@Contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^\\@Atoms/(.*)$': '<rootDir>/src/atoms/$1',
        '^\\@Utils/(.*)$': '<rootDir>/src/utils/$1',
        '^\\@Api/(.*)$': '<rootDir>/src/api/$1',
        '^\\@Assets/(.*)$': '<rootDir>/src/assets/$1',
      },
    },
  },
};
