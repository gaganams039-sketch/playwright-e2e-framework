import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { addProductToCart, continueShopping } from '../pages/productsPage';
import { gotoCartFromPopup, verifyProductInCart } from '../pages/cartPage';

test('TC12: Add Products in Cart', async ({ page }) => {
  await goto(page);
  await addProductToCart(page, 0);
  await continueShopping(page);
  await addProductToCart(page, 1);
  await gotoCartFromPopup(page);
  await verifyProductInCart(page, 'Blue Top');
  await verifyProductInCart(page, 'Men Tshirt');
});