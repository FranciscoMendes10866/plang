import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: false });
  const page = await browser.newPage();
  await page.goto('https://www.fr.fnac.ch/', { waitUntil: 'networkidle2' });
  await page.type('.Header__search-input', 'Playstation 5', { delay: 100 });
  await page.$eval('.Header__search-submit', (button) => button.click());
  await page.waitFor('.Article-item');
  const results = await page.$$eval('.Article-item', (rows) => rows.map((row) => {
    const properties = {};
    const anchorElement = row.querySelector('.Article-title');
    const imageElement = row.querySelector('.Article-itemVisualImg');
    const priceElement = row.querySelector('.userPrice');
    properties.link = anchorElement.getAttribute('href');
    properties.img = imageElement.getAttribute('src');
    properties.name = anchorElement.innerText;
    properties.price = priceElement.innerText;
    return properties;
  }));
  console.log(results);
})();