//unused file, refer to testingserver from shoppingbuddy server

const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty("textContent");
    var title = await txt.jsonValue();

    const [el2] = await page.$x('//*[@id="price_inside_buybox"]');
    const txt2 = await el2.getProperty("textContent");
    var price = await txt2.jsonValue();

    //strips the title and price of whitespaces and new lines
    var title = title.replace(/\n/g, " ");
    var price = price.replace(/\n/g, " ");
    var title = title.replace(/\s\s+/g, " ");
    var price = price.replace(/\s\s+/g, " ");

    // console.log({ title, price });

    browser.close();

    return await [title, price];
  } catch (error) {
    //catches error if the price is on another div
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty("textContent");
    var title = await txt.jsonValue();

    const [el2] = await page.$x('//*[@id="priceblock_dealprice"]');
    const txt2 = await el2.getProperty("textContent");
    var price = await txt2.jsonValue();

    //strips the title and price of whitespaces and new lines
    var title = title.replace(/\n/g, " ");
    var price = price.replace(/\n/g, " ");
    var title = title.replace(/\s\s+/g, " ");
    var price = price.replace(/\s\s+/g, " ");
    // console.log({ title, price });

    browser.close();
    // console.log({ title, price });

    return await [title, price];
    //console.log("price in priceblock");
  }
}
// npm
// const result = scrapeProduct(
//   "https://www.amazon.ca/gp/product/B07VG7PMC5/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1"
// );
// console.log(result);

(async () => {
  var values = await scrapeProduct(
    "https://www.amazon.ca/gp/product/B07VG7PMC5/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1"
  );
  console.log(values);
  console.log("title" + values[0]);
  console.log("prices" + values[1]);
})();
