const {Builder}=require("selenium-webdriver");
// var webdriver = require('selenium-webdriver');

    // const chrome=require('selenium-webdriver/chrome')
    const chromeoptions=require('selenium-webdriver/chrome')
    const optiones=chromeoptions.Options();

    // const options= new chrome.Options();
    // options.setUserPreferences("browser.download.dir","E:\\mySeleniumDownloads");
    // options.setUserPreferences('browser.donwload.foldeList',2);
    // options.setUserPreferences('browser.helperApps.neverAsk.saveToDisk','application/x-csv');
    
    const options = new ChromeOptions();  
    options.addArguments("--browser.download.folderList=2");
    options.addArguments("--browser.helperApps.neverAsk.saveToDisk=image/jpg");
    options.addArguments("--browser.download.dir=E:\\mySeleniumDownloads");
    driver = new ChromeDriver(options);


    const driver=new Builder().forBrowser('chrome').setChromeOptions(options).build();
    
    driver.get('http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv');


// driver.get('http://facebook.com');