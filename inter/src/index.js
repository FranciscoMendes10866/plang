import fastify from 'fastify';
import puppeteer from 'puppeteer';

const app = fastify();

app.register(require('fastify-cors'));

app.get('/', (request, reply) => {
  return reply.send({ msg: 'InterDiscount api working.' });
});

app.post('/', async (request, reply) => {
  const { searchProduct } = request.body;
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.interdiscount.ch/de', { waitUntil: 'networkidle2' });
  await page.type('._3fsIMp', searchProduct, { delay: 0 });
  await page.$eval('.ILBTeH', (button) => button.click());
  await page.waitFor('._8Zn5sH');
  const results = await page.$$eval('._8Zn5sH', (rows) => rows.map((row) => {
    const properties = {};
    const anchorElement = row.querySelector('.Q_opE0');
    const imageElement = row.querySelector('img');
    const nameElement = row.querySelector('h3');
    properties.link = anchorElement.getAttribute('href');
    properties.img = imageElement.getAttribute('src');
    properties.name = nameElement.innerText;
    return properties;
  }));
  return reply.send(results);
});

app.listen(5256, 'inter');
