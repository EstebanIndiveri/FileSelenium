const{Builder,By}=require('selenium-webdriver');

const driver= new Builder().forBrowser('chrome').build();

async function uploadFile(){
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/file-form');
        await (await driver).findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname+"\\exampleFile.jpg");
        await driver.findElement(By.id('submit')).click();
    } catch (error) {
        console.log(error);
    }y
}
uploadFile();