import { Page, expect } from '@playwright/test';

export async function verifyAccountInfoVisible(page: Page) {
  await expect(page.getByText('Enter Account Information')).toBeVisible();
}

export async function fillAccountInfo(page: Page, password: string) {
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByLabel('Password *').fill(password);
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1995');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from our partners!').check();
  await page.getByLabel('First name *').fill('Test');
  await page.getByLabel('Last name *').fill('User');
  await page.getByLabel('Address *').fill('123 Test Street');
  await page.getByLabel('Country *').selectOption('India');
  await page.getByLabel('State *').fill('Karnataka');
  await page.locator('#city').fill('Bangalore');
  await page.locator('#zipcode').fill('560001');
  await page.getByLabel('Mobile Number *').fill('9999999999');
  await page.getByRole('button', { name: 'Create Account' }).click();
}

export async function verifyAccountCreated(page: Page) {
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
}

export async function deleteAccount(page: Page) {
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
}