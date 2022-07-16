'use strict'

const puppeteer = require('puppeteer-extra')
const {installMouseHelper} = require('./install-mouse-helper');


// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()

    await installMouseHelper(page);



    let response = await page.goto('https://www.fiverr.com/')



    await page.waitForTimeout(5000)
    await page.screenshot({ path: 'testresult1.png', fullPage: true })
    // await page.mouse.move(135, 173);
    // await page.mouse.down();
    // await page.mouse.move(400, 330);
    await page.mouse.click(400, 330, {delay: 5000});

    // const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    await page.waitForTimeout(5000)




    // const press = await page.$x("//h2[contains(text(),'below')]");
    // if (press) {
    //     await press.click();
    // }



    // console.log(response)


    await page.screenshot({ path: 'testresult2.png', fullPage: true })
    await browser.close()
    console.log(`All done, check the screenshot. ✨`)
})
