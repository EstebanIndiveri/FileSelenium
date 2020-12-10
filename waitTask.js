const webdriver = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");



driver = new webdriver.Builder()
             .forBrowser("chrome")
             .build();

async function openWebsites(){
    try {
        await driver.get('http://yahoo.com');
        await driver.get('http://google.com');        
    } catch (error) {
        console.log(error);
    }


}
openWebsites();

// driver.get('http://google.com')