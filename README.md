# Playwright Automation Framework

This is a Playwright framework with TypeScript for the implementation of a challenge from the company ImagineX.

# Framework Structure

The framework is organized as follows:

├── .env                   # Environment variables
├── .gitignore             # Files and folders to ignore in git
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Files ignored by Prettier
├── package.json           # Project dependencies and scripts
├── playwright.config.ts   # Playwright configuration 
│── .github/               # Workflows
│── data/                  # Test data
│── locators/              # Page locators
│── pages/                 # Page Object Model classes
│── tests/                 # Test specs
│── utils/                 # Utility functions
└── tsconfig.json          # TypeScript configuration

# Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- A code editor (e.g., VS Code) is recommended.

# Installation

## Install the Framework

### Clone the project

### Install dependencies
Run command: npm install cypress --save-dev

### Create a .env file in the root directory with: (The file was kept in the repository on purpose)
- BASE_URL=https://example.com. Replace https://example.com with your application's base URL.
- BASE_API_URL=https://example.com. Replace https://example.com with your application's base API URL.
- BASE_API_KEY=APIKEY. Replace APIKEY.

### Install Cypress
Run command: npx cypress install

# Execution
## Execute all tests
Run command headless: npm run test
Run command headed: npm run test:open

Note: Use the Playwright extension for VS Code to simplify test debugging and execution.

# Reporting
Run command after execution: npx playwright show-report

# Notes
I tried to create some negative test cases for the API part, but I saw that the endpoints, even when you pass invalid values, respond without errors.