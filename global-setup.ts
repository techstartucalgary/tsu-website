import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * globalSetup configuration file to set something up once before running all tests
 */

async function globalSetupFunc() {
    // import dotenv from 'dotenv';
    // read from ".env.testEnv file"
    dotenv.config({ path: path.resolve(__dirname, '.env.local') });
    console.log("Running tests on environment:", process.env.STAGING === '1' ? "Local" : "Production");
}
export default globalSetupFunc;
