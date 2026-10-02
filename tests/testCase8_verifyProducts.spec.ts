import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoProducts, verifyAllProductsPageVisible, viewFirstProduct, verifyProductDetailsVisible } from '../pages/productsPage';

test('TC8: Verify All Products and product detail page', async ({ page }) => {
  await goto(page);
  await gotoProducts(page);
  await verifyAllProductsPageVisible(page);
  await viewFirstProduct(page);
  await verifyProductDetailsVisible(page);
});