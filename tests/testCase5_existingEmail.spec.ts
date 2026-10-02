import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyNewUserSignupVisible, startSignup } from '../pages/loginPage';

test('TC5: Register User with existing email', async ({ page }) => {
  await goto(page);
  await gotoLogin(page);
  await verifyNewUserSignupVisible(page);
  await startSignup(page, 'Test User', 'demoaccount@example.com');
  await expect(page.getByText('Email Address already exist!')).toBeVisible();
});