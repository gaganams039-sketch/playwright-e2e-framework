import { test } from '@playwright/test';
import { goto, clickBrand } from '../pages/homePage';
import { verifyBrandPageVisible } from '../pages/productsPage';

test('TC19: View Brand Products', async ({ page }) => {
  await goto(page);
  await clickBrand(page, 'Polo');
  await verifyBrandPageVisible(page, 'Polo');
});
