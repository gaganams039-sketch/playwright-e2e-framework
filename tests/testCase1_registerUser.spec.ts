import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyNewUserSignupVisible, startSignup } from '../pages/loginPage';
import { verifyAccountInfoVisible, fillAccountInfo, verifyAccountCreated, deleteAccount } from '../pages/signupPage';

test('TC1: Register User', async ({ page }) => {
  const name = 'Test User';
  const email = `testuser${Date.now()}@example.com`;

  await goto(page);
  await gotoLogin(page);
  await verifyNewUserSignupVisible(page);
  await startSignup(page, name, email);
  await verifyAccountInfoVisible(page);
  await fillAccountInfo(page, 'TestPassword123');
  await verifyAccountCreated(page);
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
  await deleteAccount(page);
});