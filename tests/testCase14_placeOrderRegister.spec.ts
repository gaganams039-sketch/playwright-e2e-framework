import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import { addProductToCart } from '../pages/productsPage';
import { gotoCartFromPopup } from '../pages/cartPage';
import { proceedToCheckout, clickRegisterLogin, verifyAddressDetailsVisible, enterOrderComment, placeOrder } from '../pages/checkoutPage';
import { startSignup, verifyNewUserSignupVisible } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated, deleteAccount } from '../pages/signupPage';
import { fillPaymentDetails, confirmPayment, verifyOrderSuccess } from '../pages/paymentPage';

test('TC14: Place Order: Register while Checkout', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  await goto(page);
  await addProductToCart(page, 0);
  await page.getByRole('link', { name: 'View Cart' }).click();
  await proceedToCheckout(page);
  await clickRegisterLogin(page);
  await verifyNewUserSignupVisible(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);

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