
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 60000,        
    requestTimeout: 10000,         
    responseTimeout: 30000,  
    
    env: {
    EMAIL: 'komee+k@blusalt.net',
    PASSWORD: 'Test123@45678'
  },
    
        baseUrl: 'https://dev-merchant.blusalt.net/',
        specPattern: '**/*.feature',
        setupNodeEvents,
    },
    
     retries: {
      runMode: 2,      
      openMode: 0      
    },
    
   
    video: true,
    screenshotOnRunFailure: true,
    
    
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results/json',
      overwrite: false,
      html: false,
      json: true
    },
    projectId: "n8gjbh"
});
    
