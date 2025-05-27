import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: "966vsm",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
