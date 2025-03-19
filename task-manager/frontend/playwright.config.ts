import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60000, // Timeout aumentado a 60 segundos
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173', // Revisa que la URL sea correcta
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});


