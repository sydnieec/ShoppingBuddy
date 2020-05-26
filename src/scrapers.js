const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty("textContent");
    const title = await txt.jsonValue();

    const [el2] = await page.$x('//*[@id="price_inside_buybox"]');
    const txt2 = await el2.getProperty("textContent");
    const price = await txt2.jsonValue();

    console.log({ title, price });

    browser.close();
  } catch (error) {
    console.log("error");
  }
}

scrapeProduct(
  "https://www.amazon.ca/gp/product/B07GK35P2C?pf_rd_r=7RK067TZRRWKJSHBKMC1&pf_rd_p=05326fd5-c43e-4948-99b1-a65b129fdd73"
);
