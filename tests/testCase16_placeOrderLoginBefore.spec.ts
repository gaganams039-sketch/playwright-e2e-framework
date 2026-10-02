import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyNewUserSignupVisible, startSignup, logout, login } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated, deleteAccount } from '../pages/signupPage';
import { addProductToCart } from '../pages/productsPage';
import { proceedToCheckout, verifyAddressDetailsVisible, enterOrderComment, placeOrder } from '../pages/checkoutPage';
import { fillPaymentDetails, confirmPayment, verifyOrderSuccess } from '../pages/paymentPage';

test('TC16: Place Order: Login before Checkout', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  // Register an account first, then log out
  await goto(page);
  await gotoLogin(page);
  await verifyNewUserSignupVisible(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);
  await logout(page);

  // Log in fresh with those same credentials
  await gotoLogin(page);
  await login(page, email, password);

  // Shop and checkout, now logged in via login
  await addProductToCart(page, 0);
  await page.getByRole('link', { name: 'View Cart' }).click();
  await proceedToCheckout(page);
  await verifyAddressDetailsVisible(page);
  await enterOrderComment(page, 'Please deliver in the evening.');
  await placeOrder(page);
  await fillPaymentDetails(page);
  await confirmPayment(page);
  await verifyOrderSuccess(page);
  await deleteAccount(page);
});