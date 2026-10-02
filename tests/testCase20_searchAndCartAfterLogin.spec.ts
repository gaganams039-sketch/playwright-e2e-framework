import { test } from '@playwright/test';
import { goto, gotoCart } from '../pages/homePage';
import { gotoLogin, startSignup, login, logout } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated } from '../pages/signupPage';
import { gotoProducts, verifyAllProductsPageVisible, searchProduct, verifySearchedProductsVisible, addProductToCart } from '../pages/productsPage';
import { verifyProductInCart } from '../pages/cartPage';

test('TC20: Search Products and Verify Cart After Login', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  // Setup: create an account, then log out (so we can log in mid-test later)
  await goto(page);
  await gotoLogin(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);
  await logout(page);

  // Steps 1-7: search as a guest
  await goto(page);
  await gotoProducts(page);
  await verifyAllProductsPageVisible(page);
  await searchProduct(page, 'Top');
  await verifySearchedProductsVisible(page);

  // Step 8: add searched products to cart
  await addProductToCart(page, 0);

  // Step 9: verify cart before login
  await gotoCart(page);
  await verifyProductInCart(page, 'Blue Top');

  // Step 10: login
  await gotoLogin(page);
  await login(page, email, password);

  // Steps 11-12: go to cart again, verify product still there
  await gotoCart(page);
  await verifyProductInCart(page, 'Blue Top');
});