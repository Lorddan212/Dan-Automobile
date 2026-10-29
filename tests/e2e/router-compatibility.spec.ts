import { test, expect } from './fixtures';

test('router compatibility: detail navigation preserves browser back and forward', async ({ page }) => {
  await page.goto('/cars/mercedes-e300?source=history');
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  await page.getByRole('link', { name: 'Request Appointment', exact: true }).click();
  await expect(page.locator('.contact-title')).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/cars\/mercedes-e300\?source=history$/);
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  await page.goForward();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator('form')).toBeVisible();
  await page.locator('footer').getByRole('link', { name: 'Privacy', exact: true }).click();
  await expect(page.locator('main h1')).toHaveText('Privacy at DanAuto');
  await page.goBack();
  await expect(page.locator('.contact-title')).toBeVisible();
});

test('router compatibility: legacy and unknown redirects replace their history entry', async ({ page }) => {
  await page.goto('/terms');
  await expect(page.locator('main h1')).toHaveText('Website Terms');
  await page.goto('/models/mercedes-e300');
  await expect(page).toHaveURL(/\/cars\/mercedes-e300$/);
  await expect(page.locator('.car-details-title')).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/terms$/);
  await expect(page.locator('main h1')).toHaveText('Website Terms');
  await page.goto('/unknown-router-compatibility-route');
  await expect(page).toHaveURL('http://127.0.0.1:4175/');
  await expect(page.locator('.hero-title')).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/terms$/);
  await expect(page.locator('main h1')).toHaveText('Website Terms');
});

test('router compatibility: a delayed lazy page retains the compact loading fallback', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-title')).toBeVisible();
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  let requested = false;
  // Exercise the same React.lazy boundary in production and development.
  await page.route(/\/(?:assets\/Services-[^/]+\.js|src\/pages\/Services\.jsx)(?:\?.*)?$/, async route => {
    requested = true;
    await gate;
    await route.continue();
  });
  try {
    await page.locator('footer').getByRole('link', { name: 'Services', exact: true }).click();
    await expect.poll(() => requested).toBe(true);
    await expect(page.locator('.loader-compact')).toBeVisible();
    await expect(page.locator('.loader-compact-text')).toHaveText('Loading DanAuto');
  } finally {
    release();
  }
  await expect(page.locator('.services-title')).toBeVisible();
  await expect(page.locator('.loader-compact')).toHaveCount(0);
  await expect(page).toHaveURL(/\/services$/);
});
