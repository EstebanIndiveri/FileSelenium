var webdriver = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");

   
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");

chromeOptions.addArguments("--browser.download.folderList=2");
    chromeOptions.addArguments("--browser.helperApps.neverAsk.saveToDisk=image/jpg");
    chromeOptions.addArguments("--browser.download.dir=E:\\mySeleniumDownloads");



driver = new webdriver.Builder()
.forBrowser("chrome")
.setChromeOptions(chromeOptions)
.build();
    driver.get('https://whatismyipaddress.com/es/mi-ip');

