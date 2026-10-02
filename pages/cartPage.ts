import { Page, expect } from '@playwright/test';

export async function gotoCartFromPopup(page: Page) {
  await page.getByRole('link', { name: 'View Cart' }).click();
}

export async function verifyProductInCart(page: Page, productName: string) {
  await expect(page.getByText(productName)).toBeVisible();
}
export async function verifyProductQuantity(page: Page, quantity: number) {
  await expect(page.getByText(quantity.toString(), { exact: true })).toBeVisible();
}

export async function removeProduct(page: Page) {
  await page.locator('.cart_quantity_delete').click();
}

export async function verifyProductNotInCart(page: Page, productName: string) {
  await expect(page.getByText(productName)).not.toBeVisible();
}