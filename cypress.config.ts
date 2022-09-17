import { defineConfig } from 'cypress';

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 15000;
      config.baseUrl = 'http://localhost:3000/';

      config.env.ENVIRONMENT = 'dev';

      return config;
    },
  },
});
