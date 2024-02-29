import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://atroul02.griffiths-waite.co.uk:50004/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Welcome to Atradius/);
});

test('get Contact link', async ({ page }) => {
  await page.goto('http://atroul02.griffiths-waite.co.uk:50004/');

  // Click the get Contact link.
  await page.getByRole('link', { name: 'Contact Us' }).click();

  // Expects page to have a button with Show.
  await page.getByText('show all');
});

test('login to Atrium', async ({ page }) => {
  await page.goto('http://atroul02.griffiths-waite.co.uk:50004/');

  // Fill the username field 
  await page.getByRole("textbox", {name: "Username"});

  // Fill the password field 
  await page.getByRole("textbox", {name: "Paassword"});

  // Expects page to have a button with Show.
  await page.getByRole('link', { name: 'login' });
});


