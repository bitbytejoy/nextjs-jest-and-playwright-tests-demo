import { test, expect } from '@playwright/test';

test('should navigate to the /about page', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await page.click('text=About');
  await expect(page).toHaveURL('http://localhost:3000/about');
  await expect(page.locator('h1')).toHaveText('About Page');
});