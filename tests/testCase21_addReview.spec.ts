import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoProducts, viewFirstProduct, writeReview, verifyReviewSuccess } from '../pages/productsPage';

test('TC21: Add review on product', async ({ page }) => {
  await goto(page);
  await gotoProducts(page);
  await viewFirstProduct(page);
  await writeReview(page, 'Test User', 'testuser@example.com', 'Great product, highly recommend!');
  await verifyReviewSuccess(page);
});