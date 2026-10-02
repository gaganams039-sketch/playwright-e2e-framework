import { test } from '@playwright/test';
import { goto, clickCategory } from '../pages/homePage';
import { clickSubCategory, verifyCategoryPageVisible } from '../pages/productsPage';

test('TC18: View Category Products', async ({ page }) => {
  await goto(page);
  await clickCategory(page, 'Women');
  await clickSubCategory(page, 'Dress');
  await verifyCategoryPageVisible(page, 'WOMEN - DRESS PRODUCTS');
});