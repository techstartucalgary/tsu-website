import { test, expect } from '@playwright/test';

/**
 * Test 'Apply Now' nagivates to the apply now page
 */
<<<<<<< HEAD
test('Apply Now btn nagivates to the apply now page', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/projects`);
  // await page.getByText('Apply Now').click();
  const applyButton = page.getByTestId('apply_now_button');
  applyButton.click();
  await expect(page).toHaveURL(`${baseURL}/apply`);
  // await expect(page.getByRole('heading', { name: 'APPLY' })).toBeVisible();
=======
test('Apply Now btn nagivates to the apply now page', async ({ page }) => {
  await page.goto('https://techstartucalgary.com/projects');
  await page.getByText('Apply Now').click();
  await expect(page).toHaveURL(/.*apply/);
  await expect(page.getByRole('heading', { name: 'APPLY' })).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await page.close();

});