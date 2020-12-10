const {Builder,By}=require('selenium-webdriver');

const driver=new Builder()
.forBrowser('chrome')
.build();

async function radioButtonFomr(){
    try {
        
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form'); 
        await (await driver).findElement(By.css('#title')).sendKeys('Title that has al least 20 characteres');
        await (await driver).findElement(By.css('#description')).sendKeys('Description that has al least 20 characteres');
        await (await (await driver).findElement(By.css('div:nth-child(2)>label >span.custom-control-indicator'))).click();
        await (await (await driver).findElement(By.css('$submit'))).click()


    } catch (error) {
        console.log(error);
    }
}