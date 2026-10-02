import { Page, expect } from '@playwright/test';

export async function gotoContactUs(page: Page) {
  await page.getByRole('link', { name: ' Contact us' }).click();
}

export async function verifyGetInTouchVisible(page: Page) {
  await expect(page.getByText('GET IN TOUCH')).toBeVisible();
}

export async function fillContactForm(page: Page, name: string, email: string, subject: string, message: string) {
  await page.locator('[data-qa="name"]').fill(name);
  await page.locator('[data-qa="email"]').fill(email);
  await page.locator('[data-qa="subject"]').fill(subject);
  await page.locator('[data-qa="message"]').fill(message);
}

export async function uploadFile(page: Page, filePath: string) {
  await page.locator('input[name="upload_file"]').setInputFiles(filePath);
}

export async function submitForm(page: Page) {
  page.on('dialog', dialog => dialog.accept());
  await page.locator('[data-qa="submit-button"]').click();
   await page.waitForTimeout(1000);
}
export async function verifySuccessMessage(page: Page) {
  await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')).toBeVisible();
}
export async function goHome(page: Page) {
  await page.locator('a.btn-success', { hasText: 'Home' }).click();
}