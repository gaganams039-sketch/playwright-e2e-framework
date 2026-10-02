import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoProducts, verifyAllProductsPageVisible, searchProduct, verifySearchedProductsVisible } from '../pages/productsPage';

test('TC9: Search Product', async ({ page }) => {
  await goto(page);
  await gotoProducts(page);
  await verifyAllProductsPageVisible(page);
  await searchProduct(page, 'Top');
  await verifySearchedProductsVisible(page);
});