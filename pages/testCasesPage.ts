import { Page } from '@playwright/test';

 export async function gotoTestCases(page: Page) {
  await page.locator('.nav').getByRole('link', { name: ' Test Cases' }).click();
}