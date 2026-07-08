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
  // Navigate to Google (explicit English locale)
  await page.goto('https://www.google.com/?hl=en', { waitUntil: 'load' });

  // Validate page title contains "Google" (case-insensitive)
  await expect(page).toHaveTitle(/google/i);
});

test('validate whatsapp page title contains Whatsapp', async ({ page }) => {
  // Navigate to whatsapp web
  await page.goto('https://web.whatsapp.com/');

  // Validate page title contains "Whatsapp"
  await expect(page).toHaveTitle(/Whatsapp/i);
});

test('validate facebook login page elements', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  const emailInput = page.getByRole('textbox', { name: /email/i });
  const passwordInput = page.getByRole('textbox', { name: /password/i });
  const loginButton = page.getByRole('button', { name: /log in/i });

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginButton).toBeVisible();

  await emailInput.fill('testuser@example.com');
  await passwordInput.fill('TestPassword123!');

  await expect(loginButton).toBeEnabled();
});


