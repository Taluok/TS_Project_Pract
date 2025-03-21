import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Shared settings for all the browsers */
  use: {
    baseURL: 'http://localhost:3000',
    headless: false,
    browserName: 'chromium',
    viewportSize: { width: 1280, height: 720 }
  },
};

export default config;
