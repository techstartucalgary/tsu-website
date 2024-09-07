import { test, expect } from '@playwright/test';

/**
 * Test that logo shows up
 */

test('Should display Logo', async ({ page }) => {
    await page.goto("https://techstartucalgary.com");
    // Find the logo image by class
    const logo = page.locator('img.homePage__logo');
    await expect(logo).toBeVisible();
    await page.close();

});


/**
 * Test join team button
 */
test('join button should navigate to Apply page', async function ({ page }) {
    await page.goto("https://techstartucalgary.com");

    // find the join team button
    await page.getByRole('link', { name: 'theTeam.join()' }).click();
    await expect(page).toHaveURL(/.*apply/)
    await page.close();
});

/**
 * Test checkout project button
 */
test('join button should navigate to Project page', async function ({ page }) {
    await page.goto('https://techstartucalgary.com/');
    await page.getByText('Check out our projects!').click();
    await page.getByText('Our', { exact: true }).click();
    await page.locator('#projectsPageTop').getByText('Projects', { exact: true }).click();
    await expect(page).toHaveURL(/.*projects/);
    await page.close();

});


/**
 * Test sponsorship button
 */
test('sponsorship button should navigate to Sponsorship pdf ', async ({ page }, testInfo) => {
    await page.goto("https://techstartucalgary.com");

    // find the button by locating the div class
    const sponsorshipBtn = await page.getByRole('link', { name: 'Check out our sponsorship' });

    //clicking the button creates a new tab, so we need switch to it
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        sponsorshipBtn.click()
    ])

    await newPage.waitForLoadState('load');

    await testInfo.attach("sponsorship_Pdf", {
        body: await newPage.screenshot(),
        contentType: "image/png",
    })
    await expect(newPage).toHaveTitle(/Sponsorship/)
    await newPage.close();
    await page.close();
});