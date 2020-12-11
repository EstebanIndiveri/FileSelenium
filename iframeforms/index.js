const{Builder,By, Key}=require('selenium-webdriver');
const driver= new Builder().forBrowser('chrome').build();

async function iframeForm(){
    try{
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form');

        await driver.switchTo().frame(0);
        await driver.findElement(By.xpath(`//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[1]/input`)).sendKeys('Esteban Indiveri');
        // await (await driver).findElement(By.xpath("//input[@aria-labelledby='i1']")).sendKeys('Esteban Indiveri');
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(
        Key.chord(
            Key.ARROW_DOWN,
            Key.ARROW_DOWN,
            Key.ARROW_DOWN,
            Key.ARROW_DOWN
            )
        ).perform();
        
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.TAB)).perform();
            
        // await driver.actions().sendKeys(Key.chord(
        //     Key.ARROW_DOWN,
        //     Key.ARROW_DOWN,
        //     Key.ARROW_DOWN,
        //     )).perform();
        // await driver.actions().sendKeys(Key.chord(Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        
        await driver.actions().sendKeys(Key.chord(Key.TAB)).perform();
        // await driver.actions().sendKeys(Key.chord(Key.TAB)).perform();
        // await driver.actions().sendKeys(Key.chord(Key.TAB)).perform();

        await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();

        await driver.actions().sendKeys(Key.chord(Key.TAB,"08261990")).perform();
        // await driver.actions().sendKeys(Key.chord("26")).perform();
        // await driver.actions().sendKeys(Key.chord(Key.TAB,"1990")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"Secret answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();

    }catch(error){
        console.log(error);
    }
}
iframeForm();