import { test, expect } from '@playwright/test';

/**
 * Test About button stays on the landing page
 */
<<<<<<< HEAD
test('Test About button stays on the landing page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('About').click();
  await expect(page).toHaveURL(`${baseURL}`);
=======
test('Test About button stays on the landing page', async ({ page }) => {
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('About').click();
  await expect(page).toHaveURL('https://techstartucalgary.com/');
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows Founder
 */
test('Test Team button navigates to the team page and shows Founder', async ({ page }) => {
<<<<<<< HEAD
  await page.goto('/')
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
  await expect(page.getByTestId('founder-img')).toBeVisible();
=======
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
  await expect(page.locator('.FounderSectionstyles__FounderImg-sc-1pgvjm2-0')).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByText('Joel Happ')).toBeVisible();
  await expect(page.getByText('Founder & Chairman')).toBeVisible();
  await expect(page.getByText('Joel HappFounder &')).toBeVisible();
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows previous presidents
 */
test('Test Team button navigates to the team page and shows the 3 previous presidents', async ({ page }) => {
<<<<<<< HEAD
  await page.goto('/');
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByTestId('profile-image-niyousha-raeesinejad')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Niyousha Raeesinejad' })).toBeVisible();
  await expect(page.getByTestId('profile-image-tyler-chan')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tyler Chan' })).toBeVisible();
  await expect(page.getByTestId('profile-image-rajpreet-gill')).toBeVisible();
=======
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByRole('img', { name: '/static/media/Niyousha_Raeesinejad.7d226e07871c60102716.jpg' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Niyousha Raeesinejad' })).toBeVisible();
  await expect(page.getByRole('img', { name: '/static/media/Tyler_Chan.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tyler Chan' })).toBeVisible();
  await expect(page.getByRole('img', { name: '/static/media/Rajpreet_Gill.' })).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByRole('heading', { name: 'Rajpreet Gill' })).toBeVisible();
  await page.close();

});

/**
 * Test Team button navigates to the team page and shows current presidents
 */
test('Test Team button navigates to the team page and shows the 2 current presidents', async ({ page }) => {
<<<<<<< HEAD
  await page.goto('/');
  await page.getByText('Team', { exact: true }).click();
  await expect(page.getByTestId('profile-image-rachel-renegado')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rachel Renegado' })).toBeVisible();
  await expect(page.getByTestId('profile-image-aarsh-shah')).toBeVisible();
=======
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Team', { exact: true }).click();
// await expect().toBeVisible();
  await expect(page.getByRole('img', { name: '/static/media/Rachel_Renegado' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rachel Renegado' })).toBeVisible();
  await expect(page.getByRole('img', { name: '/static/media/Aarsh_Shah.' })).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByRole('heading', { name: 'Aarsh Shah' })).toBeVisible();
  await page.close();

});

/**
 * Test project button navigates to the project page
 */
<<<<<<< HEAD
test('Test project button navigates to the project page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('Projects', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/projects`);
=======
test('Test project button navigates to the project page', async ({ page }) => {
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Projects', { exact: true }).click();
  await expect(page).toHaveURL('https://techstartucalgary.com/projects');
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByText('Our', { exact: true })).toBeVisible();
  await expect(page.locator('#projectsPageTop').getByText('Projects', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Final Showcase Winners' })).toBeVisible();
  await page.close();

});

/**
 * Test apply button navigates to the Apply page
 */
<<<<<<< HEAD
test('Test apply button navigates to the apply page', async ({ page, baseURL }) => {
  await page.goto('/');
  await page.getByText('Apply', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/apply`);
  // ensure there's an application section
  await expect(page.getByRole('heading', { name: 'Applications', exact: true })).toBeVisible()
=======
test('Test apply button navigates to the apply page', async ({ page }) => {
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Apply', { exact: true }).click();
  await expect(page).toHaveURL('https://techstartucalgary.com/apply');
  await expect(page.getByRole('heading', { name: 'APPLY' })).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await page.close();

});

/**
 * Test merch button navigates to the Merch page
 */
<<<<<<< HEAD
test('Test merch button navigates to the Merch page and then find the 2 merch', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Merch', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/merch`);
=======
test('Test merch button navigates to the Merch page and then find the 2 merch', async function({page}){
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Merch', { exact: true }).click();
  await expect(page).toHaveURL('https://techstartucalgary.com/merch');
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByRole('heading', { name: 'Original Basic Crewneck' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Crewneck with Sleeve Print' })).toBeVisible();
  await page.close();

});

/**
<<<<<<< HEAD
 * Test that gallery button navigates to the Gallery page
 */
test('Test gallery button navigates to the Merch page', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Gallery', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/gallery`);
  await page.getByRole('heading', { name: 'Gallery' }).click();
  await expect(page.getByTestId('photo-gallery-image-0')).toBeVisible();
  await expect(page.getByTestId('photo-gallery-image-32')).toBeVisible();
=======
 * Test gallery button navigates to the Gallery page
 */
test('Test gallery button navigates to the Merch page', async function ({ page }) {
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Gallery', { exact: true }).click();
  await expect(page).toHaveURL('https://techstartucalgary.com/gallery');
  await page.getByRole('heading', { name: 'Gallery' }).click();
  await expect(page.locator('.sc-beySbM > img').first()).toBeVisible();
  await expect(page.locator('img:nth-child(15)')).toBeVisible();
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await page.close();
});

/**
 * Test resources button navigates to the Resources page
 */
<<<<<<< HEAD
test('Test resources button navigates to the Resources page', async function ({ page, baseURL }) {
  await page.goto('/');
  await page.getByText('Resources', { exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}/resources`);
=======
test('Test resources button navigates to the Resources page', async function ({ page }) {
  await page.goto('https://techstartucalgary.com/');
  await page.locator('label').click();
  await page.getByText('Resources', { exact: true }).click();
  await expect(page).toHaveURL('https://techstartucalgary.com/resources');
>>>>>>> e548a21 (Added test coverage for navigation bar and project page)
  await expect(page.getByText('Django Guide')).toBeVisible();
  await expect(page.getByText('Git Guide')).toBeVisible();
  await expect(page.getByText('Web Dev Guide')).toBeVisible();
  await expect(page.getByText('React Guide')).toBeVisible();
  await expect(page.getByText('API Guide')).toBeVisible();
  await page.close();
});