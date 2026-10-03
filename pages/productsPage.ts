import { Page, expect } from '@playwright/test';

export async function gotoProducts(page: Page) {
  await page.locator('a[href="/products"]').click();
  await page.waitForSelector('#search_product', { timeout: 15000 });
}


export async function verifyAllProductsPageVisible(page: Page) {
  await expect(page.getByText('ALL PRODUCTS')).toBeVisible();
}

export async function viewFirstProduct(page: Page) {
  await page.locator('.product-image-wrapper').first().getByRole('link', { name: ' View Product' }).click();
  await page.waitForSelector('.product-information h2', { timeout: 15000 });
}
export async function verifyProductDetailsVisible(page: Page) {
  await expect(page.locator('.product-information h2')).toBeVisible();
  await expect(page.getByText('Category:')).toBeVisible();
  await expect(page.getByText('Availability:')).toBeVisible();
  await expect(page.getByText('Condition:')).toBeVisible();
  await expect(page.getByText('Brand:')).toBeVisible();
}

export async function searchProduct(page: Page, productName: string) {
  await page.locator('#search_product').fill(productName);
  await page.locator('#submit_search').click();
}

export async function verifySearchedProductsVisible(page: Page) {
  await expect(page.getByText('SEARCHED PRODUCTS')).toBeVisible();
}


export async function addProductToCart(page: Page, index: number) {
  const product = page.locator('.product-image-wrapper').nth(index);
  await product.hover();
  await product.getByText('Add to cart').first().click();
}

export async function continueShopping(page: Page) {
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
}

export async function setProductQuantity(page: Page, quantity: number) {
  await page.locator('#quantity').fill(quantity.toString());
}

export async function addToCartFromDetailPage(page: Page) {
  await page.getByRole('button', { name: ' Add to cart' }).click();
}

export async function clickSubCategory(page: Page, subCategory: string) {
  await page.getByRole('link', { name: subCategory }).click();
}

export async function verifyCategoryPageVisible(page: Page, expectedText: string) {
  await expect(page.getByText(expectedText)).toBeVisible();
}

export async function verifyBrandPageVisible(page: Page, brand: string) {
  await expect(page.getByRole('heading', { name: `${brand} Products` })).toBeVisible();
}

export async function writeReview(page: Page, name: string, email: string, review: string) {
  await page.getByRole('link', { name: 'Write Your Review' }).click();
  await page.getByPlaceholder('Your Name').fill(name);
  await page.locator('#email').fill(email);
  await page.getByPlaceholder('Add Review Here!').fill(review);
  await page.getByRole('button', { name: 'Submit' }).click();
}

export async function verifyReviewSuccess(page: Page) {
  await expect(page.getByText('Thank you for your review.')).toBeVisible();
}

export async function recomendediteam(page: Page) {
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const recommendedSection = page.locator(
    '.recommended_items'
  );

  await expect(recommendedSection).toBeVisible();
}

export async function addRecommendedProduct(page: Page) {
  const recommendedSection = page.locator(
    '.recommended_items'
  );

  const product = recommendedSection
    .locator('.product-image-wrapper')
    .first();

  await product.scrollIntoViewIfNeeded();

  await product.hover();

  await product
    .getByText('Add to cart')
    .first()
    .click();
}

export async function clickViewCart(page: Page) {
  await page.getByRole('link', { name: 'View Cart' }).click();
}

export async function verifyProductInCart(page: Page) {
  await expect(
    page.locator('#cart_info_table')
  ).toBeVisible();

  await expect(
    page.locator('#cart_info_table tbody tr')
  ).toHaveCount(1);
}
