import { Page, expect } from '@playwright/test';

export async function gotoLogin(page: Page) {
  await page.getByRole('link', { name: ' Signup / Login' }).click();
}

export async function verifyNewUserSignupVisible(page: Page) {
  await expect(page.getByText('New User Signup!')).toBeVisible();
}

export async function startSignup(page: Page, name: string, email: string) {
  await page.locator('[data-qa="signup-name"]').fill(name);
  await page.locator('[data-qa="signup-email"]').fill(email);
  await page.locator('[data-qa="signup-button"]').click();
}
export async function logout(page: Page) {
  await page.getByRole('link', { name: ' Logout' }).click();
}

export async function verifyLoginVisible(page: Page) {
  await expect(page.getByText('Login to your account')).toBeVisible();
}

export async function login(page: Page, email: string, password: string) {
  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill(password);
  await page.locator('[data-qa="login-button"]').click();
}