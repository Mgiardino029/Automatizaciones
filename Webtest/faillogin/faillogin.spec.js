test('Login fallido muestra mensaje de error', async ({ page }) => {

  // Abrimos la página
  await page.goto('https://www.saucedemo.com/');

  // Escribimos un usuario inválido en el input con id "user-name"
  await page.fill('#user-name', 'usuario_invalido');

  // Escribimos una contraseña incorrecta
  await page.fill('#password', 'password_incorrecta');

  // Hacemos click en el botón de login
  await page.click('#login-button');

  // Validamos que el mensaje de error esté visible
  await expect(page.locator('[data-test="error"]')).toBeVisible();
