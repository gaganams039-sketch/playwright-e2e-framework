import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { addProductToCart } from '../pages/productsPage';
import { gotoCartFromPopup, verifyProductInCart, removeProduct, verifyProductNotInCart } from '../pages/cartPage';

test('TC17: Remove Products From Cart', async ({ page }) => {
  await goto(page);
  await addProductToCart(page, 0);
  await gotoCartFromPopup(page);
  await verifyProductInCart(page, 'Blue Top');
  await removeProduct(page);
  await verifyProductNotInCart(page, 'Blue Top');
});