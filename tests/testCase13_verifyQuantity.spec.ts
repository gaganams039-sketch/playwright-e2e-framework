import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoProducts, viewFirstProduct, setProductQuantity, addToCartFromDetailPage } from '../pages/productsPage';
import { gotoCartFromPopup, verifyProductQuantity } from '../pages/cartPage';

test('TC13: Verify Product quantity in Cart', async ({ page }) => {
  await goto(page);
  await gotoProducts(page);
  await viewFirstProduct(page);
  await setProductQuantity(page, 4);
  await addToCartFromDetailPage(page);
  await gotoCartFromPopup(page);
  await verifyProductQuantity(page, 4);
});