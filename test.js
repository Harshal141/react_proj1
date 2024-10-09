const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('React App Tests', function() {
    this.timeout(30000);  // Increase timeout if needed

    let driver;

    // Set up the browser driver before each test
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Quit the driver after each test
    after(async function() {
        await driver.quit();
    });

    // Test Case 1: Check Navbar Title
    it('should have correct Navbar title', async function() {
        await driver.get('http://localhost:3000');
        
        let navbarTitle = await driver.findElement(By.css('.navbar-brand')).getText();
        assert.equal(navbarTitle, "React-Test", "Navbar title should be 'Rect-Test'");
    });

    // Test Case 2: Toggle Dark Mode
    it('should toggle dark mode', async function() {
        await driver.get('http://localhost:3000');

        // Click the toggle button
        let toggleButton = await driver.findElement(By.css('.toggle-button')); // Update selector if needed
        await toggleButton.click();

        // Check the background color changes
        let bodyStyle = await driver.findElement(By.tagName('body')).getCssValue('background-color');
        assert.equal(bodyStyle, 'rgba(51, 51, 51, 1)', "Background color should be #333333 for dark mode");
    });

    // Test Case 3: Convert Text to Uppercase
    it('should convert text to uppercase', async function() {
        await driver.get('http://localhost:3000');

        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello world');
        
        let convertButton = await driver.findElement(By.xpath('//button[text()="Convert To Uppercase"]'));
        await convertButton.click();

        let uppercasedText = await textarea.getAttribute('value');
        assert.equal(uppercasedText, 'HELLO WORLD', "Text should be converted to uppercase");
    });

    // Test Case 4: Search and Replace Text
    it('should search and replace text', async function() {
        await driver.get('http://localhost:3000');

        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello world');

        let searchInput = await driver.findElement(By.css('.search'));
        let replaceInput = await driver.findElement(By.css('.replace'));
        await searchInput.sendKeys('world');
        await replaceInput.sendKeys('universe');
        
        let replaceButton = await driver.findElement(By.xpath('//button[text()="Search and Replace"]'));
        await replaceButton.click();

        let replacedText = await textarea.getAttribute('value');
        assert.equal(replacedText, 'hello universe', "Text should be replaced");
    });

    // Test Case 5: Remove Extra Spaces
    it('should remove extra spaces from text', async function() {
        await driver.get('http://localhost:3000');

        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('hello    world');
        
        let removeSpacesButton = await driver.findElement(By.xpath('//button[text()="Remove Extra Spaces"]'));
        await removeSpacesButton.click();

        let cleanedText = await textarea.getAttribute('value');
        assert.equal(cleanedText, 'hello world', "Extra spaces should be removed");
    });

    // Test Case 6: Clear the Textarea
    it('should clear the textarea', async function() {
        await driver.get('http://localhost:3000');

        let textarea = await driver.findElement(By.css('textarea'));
        await textarea.sendKeys('some text');
        
        let clearButton = await driver.findElement(By.xpath('//button[text()="Clear"]'));
        await clearButton.click();

        let clearedText = await textarea.getAttribute('value');
        assert.equal(clearedText, '', "Textarea should be cleared");
    });
});
