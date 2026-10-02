import { Page, expect } from '@playwright/test';

export async function fillPaymentDetails(page: Page) {
  await page.locator('[data-qa="name-on-card"]').fill('Test User');
  await page.locator('[data-qa="card-number"]').fill('4111111111111111');
  await page.locator('[data-qa="cvc"]').fill('123');
  await page.locator('[data-qa="expiry-month"]').fill('12');
  await page.locator('[data-qa="expiry-year"]').fill('2028');
}

export async function confirmPayment(page: Page) {
  await page.locator('[data-qa="pay-button"]').click();
}

export async function verifyOrderSuccess(page: Page) {
  await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
}