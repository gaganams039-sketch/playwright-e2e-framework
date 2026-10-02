import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyLoginVisible, login, startSignup, logout } from '../pages/loginPage';
import { fillAccountInfo, verifyAccountCreated, deleteAccount } from '../pages/signupPage';

test('TC2: Login User with correct email and password', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'TestPassword123';

  // Create an account (auto-logs us in)
  await goto(page);
  await gotoLogin(page);
  await startSignup(page, name, email);
  await fillAccountInfo(page, password);
  await verifyAccountCreated(page);

  // Log out, since we're currently already logged in
  await logout(page);

  // Now the actual TC2 steps: login page should be reachable now
  await gotoLogin(page);
  await verifyLoginVisible(page);
  await login(page, email, password);
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
  await deleteAccount(page);
});