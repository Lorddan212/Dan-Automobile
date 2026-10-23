import { test, expect } from './fixtures';

const routes = [
  { path: '/', selector: '.hero-title', text: 'Find, inspect, and maintain your next premium vehicle' },
  { path: '/about', selector: '.about-page-story-title', text: 'DanAuto is building a clearer way to buy and maintain premium vehicles' },
  { path: '/services', selector: '.services-title', text: /Buying, servicing, and.*managing premium cars\./s },
  { path: '/cars', selector: '.cars-title', text: /Browse brands, compare models/ },
  { path: '/gallery', selector: '.gallery-title', text: /Vehicle interiors,.*inspection details,.*delivery moments\./s },
  { path: '/contact', selector: '.contact-title', text: 'Book a DanAuto showroom or service appointment' },
  { path: '/privacy', selector: 'main h1', text: 'Privacy at DanAuto' },
  { path: '/terms', selector: 'main h1', text: 'Website Terms' },
  { path: '/cookies', selector: 'main h1', text: 'Cookie Notice' },
] as const;

for (const route of routes) {
  test('direct load and refresh: ' + route.path, async ({ page }) => {
    const response = await page.goto(route.path, { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await expect(page.locator(route.selector)).toContainText(route.text);
    await expect(page.locator('.brand-name')).toHaveText('DanAuto');
    await expect(page.locator('footer')).toBeVisible();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator(route.selector)).toContainText(route.text);
    await expect(page).toHaveURL('http://127.0.0.1:4175' + (route.path === '/' ? '/' : route.path));
  });
}

test('catalog search filters and empty state preserve current behavior', async ({ page }) => {
  await page.goto('/cars');
  const cards = page.locator('.catalog-card');
  await expect(cards).toHaveCount(166);
  const search = page.getByPlaceholder('Search brand, model, type, or fuel');
  await search.fill('Camry');
  await expect(cards).toHaveCount(1);
  await expect(cards.first().locator('h3')).toHaveText('Camry');
  await search.fill('no-such-danauto-vehicle-987654');
  await expect(cards).toHaveCount(0);
  await expect(page.getByText(/Try widening the price band/)).toBeVisible();
  await search.fill('');
  await expect(cards).toHaveCount(166);
  await page.getByRole('button', { name: 'Electric', exact: true }).click();
  await expect.poll(() => cards.count()).toBeGreaterThan(0);
  expect(await cards.count()).toBeLessThan(166);
  for (const badge of await cards.locator('.catalog-card-fuel-tag').allTextContents()) {
    expect(badge).toBe('Electric');
  }
  await page.getByRole('button', { name: 'All Fuel Types', exact: true }).click();
  await expect(cards).toHaveCount(166);
  await page.getByRole('button', { name: 'Under ₦30M', exact: true }).click();
  await expect.poll(() => cards.count()).toBeGreaterThan(0);
  expect(await cards.count()).toBeLessThan(166);
  for (const price of await cards.locator('.catalog-card-price-tag').allTextContents()) {
    expect(Number(price.replace(/[^0-9.]/g, ''))).toBeLessThan(30_000_000);
  }
  await page.getByRole('button', { name: 'All Prices', exact: true }).click();
  await expect(cards).toHaveCount(166);
  await page.locator('.brand-card').filter({ hasText: 'Tesla' }).click();
  await expect.poll(() => cards.count()).toBeGreaterThan(0);
  for (const brand of await cards.locator('.catalog-card-brand-tag').allTextContents()) {
    expect(brand.trim()).toBe('Tesla');
  }
});

test('valid detail keyboard gallery, thumbnails and appointment action', async ({ page }) => {
  await page.goto('/cars/mercedes-e300');
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  const image = page.locator('.car-details-gallery-image');
  const first = await image.getAttribute('src');
  // Keyboard interaction remains usable despite the recorded pointer overlay defect.
  await page.getByRole('button', { name: 'Next image', exact: true }).press('Enter');
  await expect(image).not.toHaveAttribute('src', first!);
  await page.getByRole('button', { name: 'Previous image', exact: true }).press('Enter');
  await expect(image).toHaveAttribute('src', first!);
  await page.locator('.car-details-thumbnail').nth(1).click();
  await expect(image).not.toHaveAttribute('src', first!);
  await page.getByRole('link', { name: 'Request Appointment', exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator('form')).toBeVisible();
});

test('known baseline defect: gallery copy intercepts the next-image pointer click', async ({ page }) => {
  await page.goto('/cars/mercedes-e300');
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  const image = page.locator('.car-details-gallery-image');
  const first = await image.getAttribute('src');
  const reason = 'Pre-existing gallery text overlay covers the arrow at the tested desktop/mobile widths; source is unchanged in Phase 1A.';
  try {
    await page.getByRole('button', { name: 'Next image', exact: true }).click({ timeout: 5_000 });
  } catch (error) {
    // Only this observed obstruction qualifies as the known failure.
    // A different failure remains unexpected and fails the suite.
    expect(error).toBeInstanceOf(Error);
    expect(String(error)).toContain('car-details-gallery-copy');
    expect(String(error)).toContain('intercepts pointer events');
    test.fail(true, reason);
    throw error;
  }
  // If pointer interaction starts working, Playwright reports an unexpected pass
  // so the baseline defect must be reviewed instead of silently disappearing.
  test.fail(true, reason);
  await expect(image).not.toHaveAttribute('src', first!);
});

test('unknown vehicle IDs retain the existing unavailable page', async ({ page }) => {
  await page.goto('/cars/no-such-baseline-id');
  await expect(page.getByRole('heading', { name: 'We could not find that vehicle profile.' })).toBeVisible();
  await expect(page).toHaveURL(/\/cars\/no-such-baseline-id$/);
  await page.getByRole('link', { name: 'Return to Cars', exact: true }).click();
  await expect(page.locator('.catalog-card')).toHaveCount(166);
});

test('legacy model redirects and unknown route redirect', async ({ page }) => {
  await page.goto('/models');
  await expect(page).toHaveURL(/\/cars$/);
  await expect(page.locator('.cars-title')).toBeVisible();
  await page.goto('/models/mercedes-e300');
  await expect(page).toHaveURL(/\/cars\/mercedes-e300$/);
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  await page.goto('/models/no-such-baseline-id');
  await expect(page).toHaveURL(/\/cars\/no-such-baseline-id$/);
  await expect(page.locator('.car-details-empty-title')).toBeVisible();
  await page.goto('/unknown-baseline-route');
  await expect(page).toHaveURL('http://127.0.0.1:4175/');
  await expect(page.locator('.hero-title')).toBeVisible();
});

test('desktop/mobile navigation and gallery operate', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.locator('.hero-title')).toBeVisible();
  const mobile = testInfo.project.name === 'mobile-chromium';
  if (mobile) {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0);
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Gallery', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeVisible();
  } else {
    await page.locator('.desktop-nav').getByRole('link', { name: 'Gallery', exact: true }).click();
  }
  await expect(page).toHaveURL(/\/gallery$/);
  await expect(page.locator('.gallery-card')).toHaveCount(8);
  await expect(page.locator('.gallery-card').first().getByRole('heading')).toBeVisible();
  await page.locator('.brand-link').click();
  await expect(page).toHaveURL('http://127.0.0.1:4175/');
  await expect(page.locator('.hero-title')).toBeVisible();
});

test('contact validation and simulated success do not deliver a request', async ({ page }) => {
  const submissions: string[] = [];
  page.on('request', request => {
    if (request.method() !== 'GET' || ['fetch', 'xhr'].includes(request.resourceType())) {
      submissions.push(request.method() + ' ' + request.url());
    }
  });
  await page.goto('/contact');
  await expect(page.locator('form')).toBeVisible();
  await page.getByRole('button', { name: 'Request Appointment', exact: true }).click();
  await expect(page.getByText('Your name is required.', { exact: true })).toBeVisible();
  await page.getByLabel('Full Name', { exact: true }).fill('Baseline Test');
  await page.getByLabel('Email', { exact: true }).fill('baseline@example.invalid');
  await page.getByLabel('Phone', { exact: true }).fill('0000000000');
  await page.getByLabel('Preferred Date', { exact: true }).fill('2030-01-15');
  await page.getByLabel('What should we prepare?', { exact: true }).fill('Local regression test only; no delivery expected.');
  await page.getByRole('button', { name: 'Request Appointment', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Sending Request', exact: true })).toBeDisabled();
  await expect(page.locator('.contact-success')).toContainText('Your request has been received.');
  await expect(page.getByLabel('Full Name', { exact: true })).toHaveValue('');
  expect(submissions, 'Pre-existing simulated success sends no HTTP request').toEqual([]);
});
