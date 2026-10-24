import { test, expect } from './fixtures';

const policies = [
  { id: 'privacy', title: 'Privacy at DanAuto', sections: ['Information We Use', 'How We Use It', 'Retention and Your Choices'] },
  { id: 'terms', title: 'Website Terms', sections: ['Catalog Information', 'Inspections and Appointments', 'Payments and Third Parties'] },
  { id: 'cookies', title: 'Cookie Notice', sections: ['Essential Behavior', 'Analytics', 'Control'] },
];

for (const policy of policies) {
  test(`legal ${policy.id}: content, viewport layout and home navigation`, async ({ page }, testInfo) => {
    await page.goto(`/${policy.id}`);
    const main = page.locator('main.legal-page');
    await expect(main.getByRole('heading', { level: 1 })).toHaveText(policy.title);
    await expect(main.getByRole('heading', { level: 2 })).toHaveText(policy.sections);
    await expect(main.locator('.legal-card')).toHaveCount(3);
    await expect(page.locator('footer')).toBeVisible();

    // Wait for the existing 0.45s entry animation before measuring its geometry.
    await expect(main).toHaveCSS('opacity', '1');
    const viewport = page.viewportSize();
    if (!viewport) throw new Error('A representative viewport is required');
    const bounds = await main.boundingBox();
    if (!bounds) throw new Error('Legal page has no rendered bounds');
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport.width + 1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewport.width);
    for (const card of await main.locator('.legal-card').all()) {
      const box = await card.boundingBox();
      if (!box) throw new Error('Policy section has no rendered bounds');
      expect(box.width).toBeGreaterThan(0);
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
    }

    if (policy.id === 'privacy') {
      await page.screenshot({ path: testInfo.outputPath('privacy-layout.png'), fullPage: true });
    }
    const back = main.getByRole('link', { name: 'Back to Home' });
    await expect(back).toHaveAttribute('href', '/');
    await back.click();
    await expect(page).toHaveURL('http://127.0.0.1:4175/');
    await expect(page.locator('.hero-title')).toHaveText('Find, inspect, and maintain your next premium vehicle');
  });
}
