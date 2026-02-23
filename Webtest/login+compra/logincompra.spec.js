test('Login exitoso y agregar producto al carrito', async ({ page }) => {

  // ======================
  // LOGIN EXITOSO
  // ======================

  // Navegamos a la página principal
  await page.goto('https://www.saucedemo.com/');

  // Ingresamos usuario válido
  await page.fill('#user-name', 'standard_user');

  // Ingresamos contraseña válida
  await page.fill('#password', 'secret_sauce');

  // Click en login
  await page.click('#login-button');

  // Validamos que la URL contenga "inventory"
  await expect(page).toHaveURL(/inventory/);

  // Validamos que el título diga "Products"
  await expect(page.locator('.title')).toHaveText('Products');