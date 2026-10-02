import { test } from '@playwright/test';
import { goto } from '../pages/homePage';
import {
  gotoContactUs,
  verifyGetInTouchVisible,
  fillContactForm,
  uploadFile,
  submitForm,
  verifySuccessMessage,
  goHome,
} from '../pages/contactPage';


test('TC6: Contact Us Form', async ({ page }) => {
  await goto(page);
  await gotoContactUs(page);
  await verifyGetInTouchVisible(page);
  await fillContactForm(page, 'Test User', 'testuser@example.com', 'Test Subject', 'This is a test message.');
await uploadFile(page, 'test-data/sample.txt');
  await submitForm(page);
  await verifySuccessMessage(page);
  await goHome(page);
});