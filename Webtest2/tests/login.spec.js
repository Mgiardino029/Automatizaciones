import { test, expect } from '@playwright/test';

test('Login exitoso en demoblaze', async ({ page }) => {
  
  // Ir a la página
  await page.goto('https://www.demoblaze.com/index.html');

   // Click en login
  await page.click('#login2');

  // Completar usuario
  await page.fill('#loginusername', 'matiasg2929');

  // Completar contraseña
  await page.fill('#loginpassword', 'matias');

  // Click en login
  await page.click('button');

  // Verificar que estamos en el inventario
  await expect(page).toHaveURL(/index/);

  // Verificar que aparece el título "Products"
  await expect(page.locator('#nameofuser')).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome');
});