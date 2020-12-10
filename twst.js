// var webdriver = require('selenium-webdriver');

// var chromeCapabilities = webdriver.Capabilities.chrome();
// //setting chrome options to start the browser fully maximized
// var chromeOptions = {
//     'args': ['--test-type', '--start-maximized']
// };
// chromeCapabilities.set('chromeOptions', chromeOptions);
// var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

// // driver.get('http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv');

var webdriver = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");

const proxy=require('selenium-webdriver/proxy');   
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");

// chromeOptions.addArguments("--browser.download.folderList=2");
// chromeOptions.addArguments("--browser.helperApps.neverAsk.saveToDisk=image/jpg");
chromeOptions.addArguments("user-data-dir=C:\Users\estel\AppData\Local\Google\Chrome\User Data\Default")
// chromeOptions.addArguments("--browser.download.dir=E:\\mySeleniumDownloads");
// chromeOptions.setUserPreferences('')

const proxyServer="200.219.94.56:8080";

driver = new webdriver.Builder()
             .forBrowser("chrome")
             .setChromeOptions(chromeOptions)
             .setProxy(proxy.manual({
                 http:proxyServer,
                 https:proxyServer
             }))
             .build();

// driver.get('https://www.stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2019-financial-year-provisional/Download-data/annual-enterprise-survey-2019-financial-year-provisional-csv.csv');
// 181.164.140.80
// driver.get('http://google.com')
driver.get('https://whatismyipaddress.com/es/mi-ip');