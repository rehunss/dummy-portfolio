import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/', name: /Arka|attention/i, status: 200 },
  { path: '/work/after-hours/', name: /After Hours/i, status: 200 },
  { path: '/work/quiet-form/', name: /Quiet Form/i, status: 200 },
  { path: '/work/tidal-memory/', name: /Tidal Memory/i, status: 200 },
  { path: '/about-this-demo/', name: /demo|fictional/i, status: 200 },
  { path: '/404/', name: /404|not found|lost/i, status: 404 },
];

for (const target of pages) {
  test(`${target.path} has readable content and working images`, async ({ page }) => {
    const response = await page.goto(target.path);
    expect(response?.status()).toBe(target.status);
    await expect(page).toHaveTitle(target.name);
    const heading = page.locator('main').getByRole('heading', { level: 1 });
    await expect(heading).toHaveCount(1);
    await expect(heading).toBeVisible();
    await expect(page.locator('footer')).toContainText(/fictional/i);

    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(async () => image.evaluate((element: HTMLImageElement) =>
        element.complete && element.naturalWidth > 0,
      )).toBe(true);
      await expect(image).toHaveAttribute('alt');
    }
  });
}

test('navigation links lead to real pages and files', async ({ page }) => {
  const targets = new Set<string>();
  for (const source of ['/', '/work/after-hours/', '/about-this-demo/']) {
    await page.goto(source);
    for (const href of await page.locator('a[href]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href') || ''),
    )) {
      if (href.startsWith('/') && !href.startsWith('//')) {
        targets.add(href.split('#')[0]);
      }
    }
  }
  expect(targets.size).toBeGreaterThanOrEqual(5);
  for (const target of targets) {
    const response = await page.request.get(target || '/');
    expect(response.status(), `${target} should be reachable`).toBe(200);
  }
});

test('mobile menu supports keyboard dismissal and returns focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Open menu', exact: true });
  await trigger.focus();
  await page.keyboard.press('Enter');
  const menu = page.locator('#site-menu');
  await expect(menu).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.getByRole('button', { name: 'Close menu', exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await menu.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(page).toHaveURL(/#work$/);
});

for (const width of [360, 390, 768, 1440]) {
  test(`content remains within the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/work/after-hours/', '/about-this-demo/']) {
      await page.goto(path);
      await expect(page.locator('main').getByRole('heading', { level: 1 })).toBeVisible();
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, `${path} horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);
    }
  });
}

test('reduced motion keeps the strategy story readable without a pinned scene', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('.pin-spacer')).toHaveCount(0);
  const approach = page.locator('#approach');
  await approach.scrollIntoViewIfNeeded();
  const stages = approach.getByRole('heading', { level: 3 });
  await expect(stages).toHaveCount(3);
  for (const stage of await stages.all()) {
    await expect(stage).toBeVisible();
  }
});

test('desktop scroll advances the campaign story and can reverse to the insight', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const scene = page.locator('#approach');
  await expect(scene).toHaveAttribute('data-motion-ready', 'true');
  const pinStart = await scene.locator('.scene-pin').evaluate((element) =>
    element.getBoundingClientRect().top + window.scrollY,
  );
  const height = page.viewportSize()!.height;
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), pinStart + height * 0.75);
  await expect(scene.getByRole('heading', { name: /Give it.*a direction/i })).toBeVisible();
  await expect(scene.getByRole('heading', { name: /Find the.*human truth/i })).not.toBeVisible();

  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), pinStart + height * 1.45);
  await expect(scene.getByRole('heading', { name: /Make the.*idea move/i })).toBeVisible();
  await expect(scene.getByRole('link', { name: /Explore the strategy/i })).toBeVisible();

  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), pinStart + height * 0.1);
  await expect(scene.getByRole('heading', { name: /Find the.*human truth/i })).toBeVisible();
  await expect(scene.getByRole('heading', { name: /Make the.*idea move/i })).not.toBeVisible();
});

test('project brief is downloaded locally and never submitted', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', (request) => {
    if (request.method() === 'POST') posts.push(request.url());
  });
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Create a project brief', exact: true });
  await trigger.click();
  const dialog = page.locator('#brief-dialog');
  await expect(dialog).toBeVisible();
  await dialog.getByLabel('Your name', { exact: true }).fill('Nadia Example');
  await dialog.getByLabel('What would you like to achieve?', { exact: true }).fill('Launch a new hospitality brand website.');
  const downloadPromise = page.waitForEvent('download');
  await dialog.getByRole('button', { name: 'Download my brief', exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('my-project-brief.txt');
  const stream = await download.createReadStream();
  expect(stream).not.toBeNull();
  let text = '';
  if (stream) for await (const chunk of stream) text += chunk.toString();
  expect(text).toContain('Nadia Example');
  expect(text).toContain('Launch a new hospitality brand website.');
  await expect(dialog.getByRole('status')).toContainText(/nothing was sent/i);
  expect(posts).toEqual([]);
  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations.filter((violation) =>
    ['serious', 'critical'].includes(violation.impact || ''),
  )).toEqual([]);
  await dialog.getByRole('button', { name: 'Close project brief', exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('reversing scroll and resizing preserve navigation and content', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await page.locator('#approach').scrollIntoViewIfNeeded();
  await page.mouse.wheel(0, 1800);
  await page.mouse.wheel(0, -1000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.getByRole('link', { name: /After Hours/i }).first().click();
  await expect(page).toHaveURL(/\/work\/after-hours\//);
  await expect(page.locator('main h1')).toBeVisible();
  expect(errors).toEqual([]);
});

test('the portfolio and case studies remain usable with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/');
  await expect(page.locator('main h1')).toBeVisible();
  await page.getByRole('link', { name: /After Hours/i }).first().click();
  await expect(page).toHaveURL(/\/work\/after-hours\//);
  await expect(page.locator('main h1')).toBeVisible();
  await context.close();
});

for (const path of ['/', '/work/after-hours/', '/about-this-demo/']) {
  test(`${path} has no serious or critical automated accessibility violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    const significant = results.violations.filter((violation) =>
      ['serious', 'critical'].includes(violation.impact || ''),
    );
    expect(significant).toEqual([]);
  });
}
