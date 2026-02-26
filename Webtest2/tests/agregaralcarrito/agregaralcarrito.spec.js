import { test, expect } from '@playwright/test';

test('Agregar producto al carrito', async ({ page }) => {

  await page.goto('https://www.demoblaze.com');

  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

  // Manejar el alert correctamente
  const dialogPromise = page.waitForEvent('dialog');
  await page.getByRole('link', { name: 'Add to cart' }).click();
  const dialog = await dialogPromise;
  await dialog.accept();

  // Ahora sí ir al carrito
  await page.click('#cartur');

  await expect(page.locator('#tbodyid'))
    .toContainText('Samsung galaxy s6');
});