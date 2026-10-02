import { test, expect } from '@playwright/test';
import { goto } from '../pages/homePage';
import { gotoTestCases } from '../pages/testCasesPage';

test('TC7: Verify Test Cases Page', async ({ page }) => {
  await goto(page);
  await gotoTestCases(page);
  await expect(page).toHaveURL(/test_cases/);
});