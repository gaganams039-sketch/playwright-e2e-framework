import { Page , expect} from '@playwright/test';

export async function goto(page: Page, path: string = '/') {
  await page.goto(path);
}

export async function verifySubscriptionVisible(page: Page) {
await expect(page.getByText('Subscription')).toBeVisible();
}


export async function subscribe(page: Page, email: string) {
  await expect(page.getByPlaceholder('Your email address')).toBeVisible(); 
await page.getByPlaceholder('Your email address').fill(email);
  await page.locator('#subscribe').click();
 }

export async function verifySubscribeSuccess(page: Page) {
  await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
}

export async function gotoCart(page: Page) {
  await page.getByRole('link',{name: 'Cart'}).click();
}

export async function clickCategory(page: Page, category: string) {
  await page.getByRole('link', { name: category }).click();
}

export async function clickBrand(page: Page, brand: string) {
  await page.getByRole('link', { name: brand }).click();
}

