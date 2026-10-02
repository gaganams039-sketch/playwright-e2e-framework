import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyNewUserSignupVisible, startSignup } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated, deleteAccount } from '../pages/signupPage';
import { addProductToCart } from '../pages/productsPage';
import { proceedToCheckout } from '../pages/checkoutPage';

test('TC23: Verify address details in checkout page', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  await goto(page);
  await gotoLogin(page);
  await verifyNewUserSignupVisible(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

  await addProductToCart(page, 0);
  await page.getByRole('link', { name: 'View Cart' }).click();
  await proceedToCheckout(page);

  await expect(page.getByText(name).first()).toBeVisible();
  await expect(page.getByText('123 Test Street').first()).toBeVisible();

  await deleteAccount(page);
});