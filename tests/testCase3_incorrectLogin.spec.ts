import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoLogin, verifyLoginVisible, login } from '../pages/loginPage';

test('TC3: Login User with incorrect email and password', async ({ page }) => {
  // Steps 1-3: launch browser, navigate to site, verify homepage loads
  await goto(page);

  // Step 4: click 'Signup / Login'
  await gotoLogin(page);

  // Step 5: verify 'Login to your account' is visible
  await verifyLoginVisible(page);

  // Steps 6-7: enter incorrect email/password and click login
  await login(page, 'wronguser@example.com', 'wrongpassword123');

  // Step 8: verify error message is visible
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});
