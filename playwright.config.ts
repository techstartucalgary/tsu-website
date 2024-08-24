import { defineConfig, devices } from '@playwright/test';
<<<<<<< HEAD
import dotenv from 'dotenv';
import path from 'path';

=======

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
>>>>>>> b557bc4 (setup PlayWright tests)

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
<<<<<<< HEAD
  globalSetup: require.resolve('./global-setup'),
=======
>>>>>>> b557bc4 (setup PlayWright tests)
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
<<<<<<< HEAD
  reporter: [
    ['html', { outputFolder: 'playwright-reports', open: 'never' }],
  ['list']],
=======
  reporter: 'html',
>>>>>>> b557bc4 (setup PlayWright tests)
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
<<<<<<< HEAD
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
=======

>>>>>>> b557bc4 (setup PlayWright tests)
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
<<<<<<< HEAD
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 900 }, // Simulating 90% zoom by using larger resolution
      },
=======
      use: { ...devices['Desktop Chrome'] },
>>>>>>> b557bc4 (setup PlayWright tests)
    },

    {
      name: 'firefox',
<<<<<<< HEAD
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1600, height: 900 }, // Simulating 90% zoom by using larger resolution
      },
=======
      use: { ...devices['Desktop Firefox'] },
>>>>>>> b557bc4 (setup PlayWright tests)
    },

    {
      name: 'webkit',
<<<<<<< HEAD
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1600, height: 900 }, // Simulating 90% zoom by using larger resolution
      },
=======
      use: { ...devices['Desktop Safari'] },
>>>>>>> b557bc4 (setup PlayWright tests)
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
