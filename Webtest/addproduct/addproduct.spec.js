  // Click en el botón "Add to cart" del primer producto
  await page.click('.inventory_item button');

  // Validamos que el carrito muestre "1"
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
