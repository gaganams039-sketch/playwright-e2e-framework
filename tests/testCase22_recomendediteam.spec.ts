import { test } from '@playwright/test';

import { goto } from '../pages/homePage';

import {
  recomendediteam,
  addRecommendedProduct,
  clickViewCart,
  verifyProductInCart,
} from '../pages/productsPage';

test('TC22: Verify recommended items', async ({ page }) => {

  // 1. Launch browser
  // 2. Navigate to http://automationexercise.com
  await goto(page);

  // 3. Scroll to bottom
  // 4. Verify RECOMMENDED ITEMS are visible
  await recomendediteam(page);

  // 5. Click Add To Cart on Recommended product
  await addRecommendedProduct(page);

  // 6. Click View Cart
  await clickViewCart(page);

  // 7. Verify product is displayed in cart
  await verifyProductInCart(page);
});
