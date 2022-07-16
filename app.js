'use strict'

const puppeteer = require('puppeteer-extra')
const {installMouseHelper} = require('./install-mouse-helper');
const nconf = require('nconf');


// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

nconf.argv()
    .env()
    .file({ file: './credentials.json' })
const username = nconf.get("username")
const password = nconf.get("password")




// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {

    const page = await browser.newPage()

    await installMouseHelper(page)


    let response = await page.goto('https://www.fiverr.com/')

    await page.waitForTimeout(5000)
    await page.screenshot({ path: 'testresult1.png', fullPage: false })

    await page.mouse.click(400, 330, {delay: 5000});

    const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    // await page.waitForTimeout(5000)

    const [acceptBtn] = await page.$x("//button[@id='onetrust-accept-btn-handler']")
    await acceptBtn.click()

    const [signIn] = await page.$x("//a[@href='/login?source=top_nav']")
    await signIn.click()







    // console.log(response)

    await page.waitForTimeout(1000)

    await page.screenshot({ path: 'testresult2.png', fullPage: true })
    await browser.close()
    console.log(`All done, check the screenshot. ✨`)
})
