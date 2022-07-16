'use strict'

const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    let response = await page.goto('https://www.fiverr.com/')

    await page.waitForTimeout(5000)
    await page.screenshot({ path: 'testresult1.png', fullPage: true })
    await page.mouse.click(800, 630, {delay: 5000});

    // const data = await page.evaluate(() => document.querySelector('*').outerHTML);


    // const press = await page.$x("//h2[contains(text(),'below')]");
    // if (press) {
    //     await press.click();
    // }



    // console.log(response)


    await page.screenshot({ path: 'testresult2.png', fullPage: true })
    await browser.close()
    console.log(`All done, check the screenshot. ✨`)
})
