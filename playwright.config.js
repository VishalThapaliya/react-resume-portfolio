import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
    features: 'tests/features/**/*.feature',
    steps: 'tests/step-definitions/**/*.js'
})

const baseURL = process.env.BASE_URL || 'http:127.0.0.1:5173';

export default defineConfig({
    testDir,
    fullyParallel: true,
    reporter: 'html',
    use: {
        baseURL,
        browserName: 'chromium',
        trace: 'retain-on-failure'
    },
    webServer: {
        command: 'npm run dev -- --host 127.0.0.1',
        url: baseURL,
        reuseExistingServer: !process.env.CI
    }
})