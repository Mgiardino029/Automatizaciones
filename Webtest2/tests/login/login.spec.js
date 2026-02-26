import { test, expect } from '@playwright/test';

test('Login exitoso en demoblaze', async ({ page }) => {
  
  
  await page.goto('https://www.demoblaze.com/index.html');

  await page.click('#login2');

 
  await page.fill('#loginusername', 'matias2929');


  await page.fill('#loginpassword', 'matias');

 
  await page.getByRole('button', { name: 'Log in' }).click();

page.on('dialog', async dialog => {
  console.log('ALERT:', dialog.message());
  await dialog.accept();
});

await expect(
  page.getByRole('link', { name: /Welcome/ })
).toBeVisible({ timeout: 10000 });
});