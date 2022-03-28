import { test, expect } from '@playwright/test';

test('test yellow', async ({ page }) => {
    await page.goto('http://localhost:3800/l/gitlab-test/');
    await page.click('text=Yellow');
    await expect(await page.getAttribute('[data-test="page-title"]', 'style')).toBe('color: rgb(255, 189, 83);');
});

test('test blue', async ({ page }) => {
    await page.goto('http://localhost:3800/l/gitlab-test/');
    await page.click('text=Blue');
    await expect(await page.getAttribute('[data-test="page-title"]', 'style')).toBe('color: rgb(15, 200, 242);');
});
