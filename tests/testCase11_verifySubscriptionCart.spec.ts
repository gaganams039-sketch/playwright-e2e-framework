import { test } from '@playwright/test';
import { goto, gotoCart, verifySubscriptionVisible, subscribe, verifySubscribeSuccess } from '../pages/homePage';

test('TC11: Verify Subscription in Cart page', async ({ page }) => {
  await goto(page);
  await gotoCart(page);
  await verifySubscriptionVisible(page);
  await subscribe(page, 'testuser@example.com');
  await verifySubscribeSuccess(page);
});
