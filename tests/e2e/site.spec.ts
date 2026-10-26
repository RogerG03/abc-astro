import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const paths = ['/', '/en/', '/app/', '/en/app/', ...['saas','studio','event'].flatMap(s => [`/landing/${s}/`,`/en/landing/${s}/`]), '/404/'];
for (const path of paths) test(`${path} has metadata, no overflow and no automated WCAG A/AA violations`, async ({page}) => {
  await page.goto(path); await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('link[rel=canonical]')).toHaveCount(path === '/404/' ? 0 : 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
});
test('calculator computes, invalidates stale output and rejects invalid values', async ({page}) => {
  await page.goto('/app/'); await page.locator('#hours').fill('10'); await page.locator('#rate').fill('25');
  await expect(page.locator('output')).toHaveText('—'); await page.getByRole('button',{name:'Calcular total'}).click();
  await expect(page.locator('output')).toContainText('250'); await page.locator('#hours').fill('-1');
  await page.getByRole('button',{name:'Calcular total'}).click(); await expect(page.locator('output')).toHaveText('—');
});
test('theme persists and supports system', async ({page}) => {
  await page.goto('/'); await page.locator('#theme').selectOption('dark'); await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark'); await page.locator('#theme').selectOption('system');
  await expect(page.locator('html')).toHaveAttribute('data-preference','system');
});
test('content works with scripts disabled', async ({browser}) => {
  const context = await browser.newContext({javaScriptEnabled:false}); const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/landing/saas/'); await expect(page.locator('h1')).toBeVisible();
  await page.locator('summary').click(); await expect(page.locator('details')).toHaveAttribute('open',''); await context.close();
});
test('theme and calculation work when storage is blocked', async ({page}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
  });
  await page.goto('/app/'); await page.locator('#theme').selectOption('dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await expect(page.locator('output')).toContainText('200');
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
});
