import { test, expect } from '@playwright/test';

/**
 * Test 'Apply Now' nagivates to the apply now page
 */
test('Apply Now btn nagivates to the apply now page', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/projects`);
  const applyButton = page.getByTestId('apply_now_button');
  await applyButton.click();
  await expect(page).toHaveURL(`${baseURL}/apply`);
  // await expect(page.getByRole('heading', { name: 'APPLY' })).toBeVisible();
  await page.close();
});