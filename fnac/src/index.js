
import fastify from 'fastify';
import puppeteer from 'puppeteer';

const app = fastify();

app.post('/', async (request, reply) => {
  const { searchProduct } = request.body;
  const browser = await puppeteer.launch({ headless: false, defaultViewport: false });
  const page = await browser.newPage();
  await page.goto('https://www.fr.fnac.ch/', { waitUntil: 'networkidle2' });
  await page.type('.Header__search-input', searchProduct, { delay: 100 });
  await page.$eval('.Header__search-submit', (button) => button.click());
  await page.waitFor('.Article-item');
  const results = await page.$$eval('.Article-item', (rows) => rows.map((row) => {
    const properties = {};
    const anchorElement = row.querySelector('.Article-title');
    const imageElement = row.querySelector('.Article-itemVisualImg');
    properties.link = anchorElement.getAttribute('href');
    properties.img = imageElement.getAttribute('src');
    properties.name = anchorElement.innerText;
    return properties;
  }));
  return reply.send(results);
});

app.listen(4159);