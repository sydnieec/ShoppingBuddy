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
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty("textContent");
    const title = await txt.jsonValue();

    const [el2] = await page.$x('//*[@id="priceblock_dealprice"]');
    const txt2 = await el2.getProperty("textContent");
    const price = await txt2.jsonValue();

    console.log({ title, price });

    browser.close();

    console.log("price in priceblock");
  }
}

scrapeProduct(
  "https://www.amazon.ca/Miracle-Gro-AeroGarden-970293-0000-Sponges-50-Pack/dp/B008DY2U8K/ref=br_msw_pdt-6?_encoding=UTF8&smid=A3DWYIK6Y9EEQB&pf_rd_m=A3DWYIK6Y9EEQB&pf_rd_s=&pf_rd_r=40EKP0MEFB95WVAVJ29B&pf_rd_t=36701&pf_rd_p=fa81227e-a2f9-4a57-a776-2b0a0e402c3d&pf_rd_i=desktop"
);
