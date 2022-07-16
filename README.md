
using:

```shell
$ nvm install stable

$ node -v
v18.6.0

$ npm -v
8.13.2

```

```shell
npm init -y
Wrote to ./package.json:

{
  "name": "puppeteer-fiverr-automation",
  "version": "1.0.0",
  "description": "using:",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation/issues"
  },
  "homepage": "https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation#readme"
}
```

```json
{
  "name": "puppeteer-fiverr-automation",
  "version": "1.0.0",
  "description": "```shell npm init -y  # this creates package.json npm install  ```",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation/issues"
  },
  "homepage": "https://github.com/Sher-Chowdhury/puppeteer-fiverr-automation#readme"
}
```

This updates package.json and downloads package to the node_modules folder

```shell
npm install puppeteer
```

Now create your main js file, e.g. app.js:

```javascript
'use strict'

console.log("hello world")
```

check it works:

```shell
node app.js 
hello
```

Then add the following start script:

```shell
npm set-script start "node app.js"
```



block on in your start block:

```
  "scripts": {
    "test": "mocha \"*/**/*Test.js\""
  },
```

Check this start-command works:

```shell
$ npm start             

> puppeteer-fiverr-automation@1.0.0 start
> node app.js

hello world
```
