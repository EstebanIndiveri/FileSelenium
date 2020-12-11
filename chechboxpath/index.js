const{By, Builder}=require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

async function checkboxForm(){
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys('Myname');
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys('funny comment');
        await await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click()
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click()
        await driver.findElement(By.xpath("//button[@id='submit']")).click();

    } catch (error) {
        console.log(error);
    }
}
checkboxForm();