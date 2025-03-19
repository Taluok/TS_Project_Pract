import { test, expect } from '@playwright/test';

test.describe('Task Manager App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Debería mostrar el título de la aplicación', async ({ page }) => {
    const title = page.locator('h1');
    await expect(title).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera
    await expect(title).toHaveText('Gestor de Tareas', { timeout: 60000 }); // Aumentar el tiempo de espera
  });

  test('Debería permitir agregar una tarea', async ({ page }) => {
    const input = page.locator('input[placeholder="Nueva tarea"]');
    await expect(input).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera

    await input.fill('Aprender Playwright');
    await page.click('button:has-text("Agregar Tarea")');

    const taskItem = page.locator('.task-item:has-text("Aprender Playwright")');
    await expect(taskItem).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera
  });

  test('Debería permitir marcar una tarea como completada', async ({ page }) => {
    const input = page.locator('input[placeholder="Nueva tarea"]');
    await expect(input).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera

    await input.fill('Completar tarea');
    await page.click('button:has-text("Agregar Tarea")');

    const taskCheckbox = page.locator('.task-item:has-text("Completar tarea") input[type="checkbox"]');
    await expect(taskCheckbox).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera
    await taskCheckbox.check();

    await expect(taskCheckbox).toBeChecked();
  });

  test('Debería permitir eliminar una tarea', async ({ page }) => {
    const input = page.locator('input[placeholder="Nueva tarea"]');
    await expect(input).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera

    await input.fill('Tarea a eliminar');
    await page.click('button:has-text("Agregar Tarea")');

    const tasksBefore = await page.locator('.task-item').count();

    const deleteButton = page.locator('.task-item:has-text("Tarea a eliminar") button:has-text("Eliminar")');
    await expect(deleteButton).toBeVisible({ timeout: 60000 }); // Aumentar el tiempo de espera
    await deleteButton.click();

    const tasksAfter = await page.locator('.task-item').count();
    expect(tasksAfter).toBe(tasksBefore - 1);
  });
});



















