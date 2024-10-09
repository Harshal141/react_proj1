const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

(async function testNavbarTitle() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');
        
        // Find the Navbar element and get the text
        let navbarTitle = await driver.findElement(By.css('.navbar-brand')).getText();
        assert.equal(navbarTitle, "React-Test", "Navbar title should be 'React-Test'");
        
        console.log("Navbar title is correct.");
    } finally {
        await driver.quit();
    }
})();

(async function testDarkModeToggle() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        // Find and click the toggle button
        let toggleButton = await driver.findElement(By.css('.toggle-button')); // Replace with actual toggle button selector
        await toggleButton.click();

        // Check if the background color changes to dark
        let bodyStyle = await driver.findElement(By.tagName('body')).getCssValue('background-color');
        assert.equal(bodyStyle, 'rgba(51, 51, 51, 1)', "Dark mode should change the background color to #333333");
        
        console.log("Dark mode toggled successfully.");
    } finally {
        await driver.quit();
    }
})();

(async function testUppercaseConversion() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        // Input text into the textarea
        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello world');
        
        // Click the "Convert To Uppercase" button
        let convertButton = await driver.findElement(By.xpath('//button[text()="Convert To Uppercase"]'));
        await convertButton.click();

        // Verify the text has been converted to uppercase
        let uppercasedText = await textarea.getAttribute('value');
        assert.equal(uppercasedText, 'HELLO WORLD', "Text should be converted to uppercase");
        
        console.log("Text converted to uppercase successfully.");
    } finally {
        await driver.quit();
    }
})();


(async function testSearchReplace() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        // Input text into the textarea
        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello world');

        // Input search and replace terms
        let searchInput = await driver.findElement(By.css('.search'));
        let replaceInput = await driver.findElement(By.css('.replace'));
        await searchInput.sendKeys('world');
        await replaceInput.sendKeys('universe');
        
        // Click the "Search and Replace" button
        let replaceButton = await driver.findElement(By.xpath('//button[text()="Search and Replace"]'));
        await replaceButton.click();

        // Verify the text has been replaced
        let replacedText = await textarea.getAttribute('value');
        assert.equal(replacedText, 'hello universe', "Text should be replaced");
        
        console.log("Search and replace functionality works.");
    } finally {
        await driver.quit();
    }
})();


(async function testRemoveExtraSpaces() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        // Input text with extra spaces
        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello    world');
        
        // Click the "Remove Extra Spaces" button
        let removeSpacesButton = await driver.findElement(By.xpath('//button[text()="Remove Extra Spaces"]'));
        await removeSpacesButton.click();

        // Verify the extra spaces are removed
        let cleanedText = await textarea.getAttribute('value');
        assert.equal(cleanedText, 'hello world', "Extra spaces should be removed");
        
        console.log("Extra spaces removed successfully.");
    } finally {
        await driver.quit();
    }
})();


(async function testClearTextarea() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        // Input text into the textarea
        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('some text');
        
        // Click the "Clear" button
        let clearButton = await driver.findElement(By.xpath('//button[text()="Clear"]'));
        await clearButton.click();

        // Verify the textarea is cleared
        let clearedText = await textarea.getAttribute('value');
        assert.equal(clearedText, '', "Textarea should be cleared");
        
        console.log("Textarea cleared successfully.");
    } finally {
        await driver.quit();
    }
})();


