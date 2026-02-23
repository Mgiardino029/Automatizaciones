  // Click en el icono del carrito
  await page.click('.shopping_cart_link');

  // Validamos que estamos en la página del carrito
  await expect(page).toHaveURL(/cart/);

  // Validamos que exista al menos un producto en el carrito
  await expect(page.locator('.cart_item')).toHaveCount(1);
