import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { test, expect } from './fixtures';

// These exercise Vite's production preview, not Vercel's routing service.
// The separately authorized deployed-preview gate must verify vercel.json.
test('nested query string survives direct load and refresh', async ({ page }) => {
  const route = '/cars/mercedes-e300?source=routing%20check&tag=one&tag=two';
  const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  expect(new URL(page.url()).searchParams.get('source')).toBe('routing check');
  expect(new URL(page.url()).searchParams.getAll('tag')).toEqual(['one', 'two']);
  const refreshed = await page.reload({ waitUntil: 'domcontentloaded' });
  expect(refreshed?.status()).toBe(200);
  await expect(page.locator('.car-details-title')).toHaveText('Mercedes-Benz E 300 AMG Line');
  await expect(page).toHaveURL('http://127.0.0.1:4175' + route);
});

test('trailing slash route retains page and query on refresh', async ({ page }) => {
  const route = '/about/?source=routing-check';
  expect((await page.goto(route))?.status()).toBe(200);
  await expect(page.locator('.about-page-story-title')).toBeVisible();
  expect((await page.reload())?.status()).toBe(200);
  await expect(page.locator('.about-page-story-title')).toBeVisible();
  await expect(page).toHaveURL('http://127.0.0.1:4175' + route);
});

test('built JavaScript CSS HTML and public favicon retain bytes and MIME types', async ({ request }) => {
  const dist = path.resolve('dist');
  const entries = await readdir(dist, { recursive: true, withFileTypes: true });
  const files = entries.filter(entry => entry.isFile());
  expect(files.length).toBeGreaterThan(0);
  const extensions = new Set<string>();
  for (const file of files) {
    const absolute = path.join(file.parentPath, file.name);
    const route = '/' + path.relative(dist, absolute).split(path.sep).join('/');
    const response = await request.get(route + '?routing-check=asset', { maxRedirects: 0 });
    expect(response.status(), route).toBe(200);
    expect(await response.body(), route).toEqual(await readFile(absolute));
    const extension = path.extname(file.name);
    extensions.add(extension);
    const mime = response.headers()['content-type'];
    if (extension === '.js') expect(mime, route).toMatch(/javascript/);
    if (extension === '.css') expect(mime, route).toMatch(/text\/css/);
    if (extension === '.svg') expect(mime, route).toMatch(/image\/svg\+xml/);
    if (extension === '.html') expect(mime, route).toMatch(/text\/html/);
  }
  for (const extension of ['.js', '.css', '.svg', '.html']) expect(extensions.has(extension)).toBe(true);
});
