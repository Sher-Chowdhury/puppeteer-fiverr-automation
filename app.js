'use strict'

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response =  await page.goto('https://www.fiverr.com/');

    console.log(response)
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();
