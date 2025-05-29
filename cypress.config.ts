import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
  env: {
    baseApiUrl: 'https://reqres.in',
    apiKey: 'reqres-free-v1',
  },
});