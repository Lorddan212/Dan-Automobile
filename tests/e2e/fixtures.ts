import { test as base, expect } from '@playwright/test';

// Deterministic image/font substitutes only: no provider or production requests.
// These checks establish UI behavior, not external image delivery or visual parity.
const placeholder = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="#17202d"/></svg>';

export const test = base.extend({
  page: async ({ page }, use) => {
    const browserErrors: string[] = [];
    const unexpectedExternal: string[] = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') browserErrors.push(message.text());
    });
    await page.context().route('**/*', async route => {
      const request = route.request();
      const url = new URL(request.url());
      if (url.origin === 'http://127.0.0.1:4175') {
        await route.continue();
      } else if (request.resourceType() === 'image') {
        await route.fulfill({ contentType: 'image/svg+xml', body: placeholder });
      } else if (request.resourceType() === 'stylesheet') {
        await route.fulfill({ contentType: 'text/css', body: '' });
      } else {
        unexpectedExternal.push(request.method() + ' ' + url.origin + url.pathname);
        await route.abort('blockedbyclient');
      }
    });
    await use(page);
    expect(unexpectedExternal, 'No unexpected external traffic').toEqual([]);
    expect(browserErrors, 'No uncaught page or console errors').toEqual([]);
  },
});

export { expect } from '@playwright/test';
