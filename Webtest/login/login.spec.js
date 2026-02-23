import { test, expect } from '@playwright/test';

test('Login exitoso en SauceDemo', async ({ page }) => {
  
  // Ir a la página
  await page.goto('https://www.saucedemo.com/');

  // Completar usuario
  await page.fill('#user-name', 'standard_user');

  // Completar contraseña
  await page.fill('#password', 'secret_sauce');

  // Click en login
  await page.click('#login-button');

  // Verificar que estamos en el inventario
  await expect(page).toHaveURL(/inventory/);

  // Verificar que aparece el título "Products"
  await expect(page.locator('.title')).toHaveText('Products');
});