import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyLoginVisible, login, startSignup, logout } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated } from '../pages/signupPage';

test('TC4: Logout User', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  // Setup: register a new account so we have valid credentials to log in with
  await goto(page);
  await gotoLogin(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);

  // Registration auto-logs us in, so log out first before testing the real login flow
  await logout(page);

  // Steps 1-3: launch browser, navigate, verify homepage (already covered by goto above)
  // Step 4: click 'Signup / Login'
  await gotoLogin(page);

  // Step 5: verify 'Login to your account' is visible
  await verifyLoginVisible(page);

  // Steps 6-7: enter correct email/password and click login
  await login(page, email, password);

  // Step 8: verify 'Logged in as username' is visible
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

  // Step 9: click 'Logout' button
  await logout(page);

  // Step 10: verify user is navigated to login page
  await expect(page).toHaveURL(/login/);
  await verifyLoginVisible(page);
});