const {
    Builder,
    By
} = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

async function tableForm() {
    let results=[];

    try {
        (await driver).get('https://rori4.github.io/selenium-practice/#/pages/tables/smart-table');
        let rows = await driver.findElements(By.xpath("//tbody/tr"));
        for (const row of rows) {
            let rowData = await row.getText();
            let user=rowData.split(/\n/);
            results.push({
                id:user[0],
                firstName:user[1],
                lastName:user[2],
                username:use[3],
                email:user[4],
                age:user[5],

            })
            debugger;
        }
        console.table(results);

    } catch (error) {
        console.log(error);
    }
}
tableForm();