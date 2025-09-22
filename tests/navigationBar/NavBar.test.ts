import { test, expect } from '@playwright/test';

/**
 * Test About button stays on the landing page
 */
test('Test About button stays on the landing page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('About').click();
  await expect(page).toHaveURL(`${baseURL}`);
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows Founder
 */
test('Test Team button navigates to the team page and shows Founder', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
  await expect(page.getByTestId('founder-img')).toBeVisible();
  await expect(page.getByText('Joel Happ')).toBeVisible();
  await expect(page.getByText('Founder & Chairman')).toBeVisible();
  await expect(page.getByText('Joel HappFounder &')).toBeVisible();
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows previous presidents
 */
test('Test Team button navigates to the team page and shows the 3 previous presidents', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByTestId('profile-image-niyousha-raeesinejad')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Niyousha Raeesinejad' })).toBeVisible();
  await expect(page.getByTestId('profile-image-tyler-chan')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tyler Chan' })).toBeVisible();
  await expect(page.getByTestId('profile-image-rajpreet-gill')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rajpreet Gill' })).toBeVisible();
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows current presidents
 */
test('Test Team button navigates to the team page and shows the 2 current presidents', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByTestId('profile-image-maheen-raza')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Maheen Raza' })).toBeVisible();
  await expect(page.getByTestId('profile-image-youssef-hamed')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Youssef Hamed' })).toBeVisible();
  await page.close();

});

/**
 * Test project button navigates to the project page
 */
test('Test project button navigates to the project page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('Projects', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/projects`);
  await expect(page.getByText('Our', { exact: true })).toBeVisible();
  await expect(page.locator('#projectsPageTop').getByText('Projects', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Final Showcase Winners' })).toBeVisible();
  await page.close();

});

/**
 * Test apply button navigates to the Apply page
 */
test('Test apply button navigates to the apply page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('Apply', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/apply`);
  // ensure there's an application section
  await expect(page.getByRole('heading', { name: 'Applications', exact: true })).toBeVisible()
  await page.close();

});

/**
 * Test merch button navigates to the Merch page
 */
test('Test merch button navigates to the Merch page and then find the 2 merch', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Merch', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/merch`);
  await expect(page.getByRole('heading', { name: 'Original Basic Crewneck' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Crewneck with Sleeve Print' })).toBeVisible();
  await page.close();

});

/**
 * Test that gallery button navigates to the Gallery page
 */
test('Test gallery button navigates to the Merch page', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Gallery', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/gallery`);
  await page.getByRole('heading', { name: 'Gallery' }).click();
  await expect(page.getByTestId('photo-gallery-image-0')).toBeVisible();
  await expect(page.getByTestId('photo-gallery-image-32')).toBeVisible();
  await page.close();
});

/**
 * Test resources button navigates to the Resources page
 */
test('Test resources button navigates to the Resources page', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Resources', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/resources`);
  await expect(page.getByText('Django Guide')).toBeVisible();
  await expect(page.getByText('Git Guide')).toBeVisible();
  await expect(page.getByText('Web Dev Guide')).toBeVisible();
  await expect(page.getByText('React Guide')).toBeVisible();
  await expect(page.getByText('API Guide')).toBeVisible();
  await page.close();
});