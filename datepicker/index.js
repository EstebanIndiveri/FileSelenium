const{Builder,By}=require('selenium-webdriver');

const driver = new Builder()
.forBrowser('chrome')
.build();

async function datepickerForm(){
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form');
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys('Dec 16,2020');
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys('Dec 17,2020 - Dec 19, 2020');
        await driver.findElement(By.id("submit")).click();
        
    } catch (error) {
        console.log(error);
    }
}
datepickerForm()