import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username
  await page.locator('#username').fill('tomsmith');

  // Enter password
  await page.locator('#password').fill('SuperSecretPassword!');

  // Click the login button
  await page.locator('button[type="submit"]').click();

  // Verify the success message contains "You logged into a secure area!"
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});

test('validate google page title', async ({ page }) => {
  // Navigate to google.com
  await page.goto('https://google.com');

  // Validate page title is "Google"
  await expect(page).toHaveTitle('Google');
});

test('validate whatsapp page title contains Whatsapp', async ({ page }) => {
  // Navigate to whatsapp web
  await page.goto('https://web.whatsapp.com/');

  // Validate page title contains "Whatsapp"
  await expect(page).toHaveTitle(/Whatsapp/i);
});


