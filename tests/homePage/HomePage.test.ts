import { test, expect } from '@playwright/test';

/**
 * Test that logo shows up
 */

test('Should display Logo', async ({ page }) => {
    await page.goto("http://localhost:3000");
    // Find the logo image by class
    const logo = page.locator('img.homePage__logo');
    await expect(logo).toBeVisible();
});


/**
 * Test join team button
 */
test('join button should navigate to Apply page', async function ({ page }) {
    await page.goto("http://localhost:3000");

    // find the join team button
    page.getByRole('link', { name: 'theTeam.join()' }).click();
    await expect(page).toHaveURL(/.*apply/)
});

/**
 * Test checkout project button
 */

/**
 * Test sponsorship button
 */