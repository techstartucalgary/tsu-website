import { test, expect } from '@playwright/test';

/**
 * Test 'Apply Now' nagivates to the apply now page
 */
test('Apply Now btn nagivates to the apply now page', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/projects`);
  await page.getByText('Apply Now').click();
  await expect(page).toHaveURL(/.*apply/);
  await expect(page.getByRole('heading', { name: 'APPLY' })).toBeVisible();
  await page.close();

});