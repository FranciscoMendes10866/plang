import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: false });
  const page = await browser.newPage();
  await page.goto('https://www.mediamarkt.ch/de/', { waitUntil: 'networkidle2' });
  await page.type('.ms-autosugestions__search-input', 'LG oled', { delay: 100 });
  await page.$eval('.ms-button2--search', (button) => button.click());
})();