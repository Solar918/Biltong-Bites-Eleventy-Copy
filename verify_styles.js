const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1080 });

  // Homepage Dark
  await page.goto('http://localhost:8080');
  await page.waitForTimeout(1000); // Wait for animations
  await page.screenshot({ path: 'homepage-dark.png' });

  // Homepage Light
  await page.click('.theme-toggle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'homepage-light.png' });

  // Product Page
  await page.goto('http://localhost:8080/products/product-100og/');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'product-dark.png' });

  await browser.close();
})();
