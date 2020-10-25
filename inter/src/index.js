import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: false });
  const page = await browser.newPage();
  await page.goto('https://www.interdiscount.ch/de', { waitUntil: 'networkidle2' });
  await page.type('._3fsIMp', 'Playstation 5', { delay: 100 });
  await page.$eval('.ILBTeH', (button) => button.click());
  await page.waitFor('._8Zn5sH');
  const results = await page.$$eval('._8Zn5sH', (rows) => rows.map((row) => {
    const properties = {};
    const anchorElement = row.querySelector('.Q_opE0');
    const imageElement = row.querySelector('img');
    const nameElement = row.querySelector('h3');
    const priceElement = row.querySelector('._3H04_H');
    properties.link = anchorElement.getAttribute('href');
    properties.img = imageElement.getAttribute('src');
    properties.name = nameElement.innerText;
    properties.price = priceElement.innerText;
    return properties;
  }));
  console.log(results);
})();