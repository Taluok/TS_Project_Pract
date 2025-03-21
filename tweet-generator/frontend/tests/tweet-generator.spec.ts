import { test, expect } from '@playwright/test';

test('Generar tweet correctamente', async ({ page }) => {
  await page.goto('/');
  await page.click('button');
  await expect(page.locator('div')).toContainText('¡Tweet generado automáticamente!');
});
