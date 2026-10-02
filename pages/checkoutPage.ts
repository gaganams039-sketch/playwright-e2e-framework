import { Page, expect } from '@playwright/test';

export async function proceedToCheckout(page: Page) {
  await page.getByText('Proceed To Checkout').click();
}

export async function clickRegisterLogin(page: Page) {
  await page.getByRole('link', { name: 'Register / Login' }).click();
}

export async function verifyAddressDetailsVisible(page: Page) {
  await expect(page.getByText('Address Details')).toBeVisible();
  await expect(page.getByText('Review Your Order')).toBeVisible();
}

export async function enterOrderComment(page: Page, comment: string) {
  await page.locator('textarea[name="message"]').fill(comment);
}

export async function placeOrder(page: Page) {
  await page.getByText('Place Order').click();
}