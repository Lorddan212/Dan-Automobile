import { test, expect } from './fixtures';

// Measured Tailwind 3 design contracts that must survive the CSS integration upgrade.
test('contact theme, field focus and validation colors retain the existing design', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.locator('.contact-title')).toHaveCSS('font-family', 'Roboto, sans-serif');
  await expect(page.locator('.contact-eyebrow')).toHaveCSS('color', 'rgb(201, 164, 92)');

  const name = page.getByLabel('Full Name', { exact: true });
  await expect(name).toHaveCSS('border-radius', '20px');
  await expect(name).toHaveCSS('padding-top', '12px');
  await expect(name).toHaveCSS('padding-left', '16px');
  await name.focus();
  await expect(name).toHaveCSS('border-top-color', 'rgba(201, 164, 92, 0.35)');
  await expect(name).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.35)');
  await expect(name).toHaveCSS('outline-style', 'solid');
  await expect(name).toHaveCSS('outline-width', '2px');
  await expect(page.getByLabel('Preferred Date', { exact: true })).toHaveCSS('height', '48px');

  const submit = page.getByRole('button', { name: 'Request Appointment', exact: true });
  await expect(submit).toHaveCSS('cursor', 'pointer');
  await submit.click();
  const error = page.getByText('Your name is required.', { exact: true });
  await expect(error).toBeVisible();
  await expect(error).toHaveCSS('color', 'rgb(253, 164, 175)');
});

test('catalog typography, icon sizes and existing accent rendering stay stable', async ({ page }) => {
  await page.goto('/cars');
  const width = page.viewportSize()?.width;
  if (!width) throw new Error('A known viewport is required');
  await expect(page.locator('.cars-title')).toHaveCSS('line-height', width >= 640 ? '48px' : '34.2px');
  const card = page.locator('.catalog-card').first();
  await card.scrollIntoViewIfNeeded();
  const icon = card.locator('.catalog-card-stat-shell .icon-shell').first();
  await expect(icon).toHaveCSS('width', '32px');
  await expect(icon).toHaveCSS('height', '32px');
  await expect(card.locator('.catalog-card-accent')).toHaveCSS('background-image', 'none');
});

test('navigation and contact typography preserve responsive breakpoint boundaries', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.locator('.contact-title')).toBeVisible();
  for (const width of [639, 640, 767, 768, 1023, 1024, 1279, 1280, 1535, 1536]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.locator('.contact-title')).toHaveCSS('font-size', width < 640 ? '30px' : width < 1024 ? '36px' : '48px');
    await expect(page.locator('.contact-title')).toHaveCSS('line-height', width < 640 ? '28.5px' : width < 1024 ? '40px' : '48px');
    const toggle = page.getByRole('button', { name: 'Open navigation menu' });
    if (width < 1280) await expect(toggle).toBeVisible();
    else await expect(toggle).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});
