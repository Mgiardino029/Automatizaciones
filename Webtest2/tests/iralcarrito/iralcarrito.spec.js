import { test, expect } from '@playwright/test';

test('Ir al carrito', async ({ page }) => {

  // Ir a la página principal
  await page.goto('https://www.demoblaze.com/index.html');

  // Click en "Cart"
  await page.click('#cartur');

  // Verificar que la URL es correcta
  await expect(page).toHaveURL(/cart/);

  // Verificar que el título "Products" está visible
  await expect(page.locator('.col-lg-8 h2')).toHaveText('Products');
});