const {
    Builder,
    By
} = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

(async ()=>{
    try {
        await driver.get("https://www.youtube.com/");
        await driver.sleep(3000);
        await driver.findElement(By.xpath("//ytd-mini-guide-entry-renderer[2]/a[@id='endpoint']")).click();
        await driver.sleep(3000);

        await driver.findElement(By.xpath("//ytd-channel-list-sub-menu-renderer/div[@id='contents']/ytd-channel-list-sub-menu-avatar-renderer[1]")).click().then(()=>console.log('-- PASS Music button'))

        await driver.manage().deleteAllCookies();
        await driver.quit();
    } catch (error) {
        console.log(error);
    }
})();