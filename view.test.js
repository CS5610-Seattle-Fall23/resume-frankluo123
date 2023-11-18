/**
 * Jest-Puppeteer Unit Testing
 * @ author - Frank Luo
 * Sources Used: 
 * https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
 * https://www.youtube.com/watch?v=ajiAl5UNzBU 
 */


const puppeteer = require('puppeteer');

describe('Basic Page Content Test', () => {
    test('Checks if the h1 title is present on the page', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/resume-frankluo123/index.html');

        // Waits for the h1 element to be rendered
        await page.waitForSelector('h1');

        // Retrieves the text content of the h1 element
        const titleText = await page.evaluate(() => {
            const title = document.querySelector('h1');
            return title ? title.innerText : '';
        });

        // Checks that the title text is not empty
        expect(titleText).not.toBe('');

        await browser.close();
    }, 10000); // Setting a 10-second timeout
});



