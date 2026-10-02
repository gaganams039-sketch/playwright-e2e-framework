import { test } from '@playwright/test';
import { goto, verifySubscriptionVisible, subscribe, verifySubscribeSuccess } from '../pages/homePage';

test('TC10: Verify Subscription', async ({ page }) => {
  await goto(page);
  await verifySubscriptionVisible(page);
  await subscribe(page, 'test@example.com');
  await verifySubscribeSuccess(page);
});