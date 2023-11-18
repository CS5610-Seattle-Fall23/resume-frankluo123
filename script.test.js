/**
 * Jest Unit Testing
 * @ author - Frank Luo
 * Sources Used: 
 * https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
 * https://jestjs.io/docs/getting-started
 * https://dev.to/dstrekelj/how-to-write-unit-tests-in-javascript-with-jest-2e83
 * https://www.youtube.com/watch?v=FgnxcUQ5vho 
 */

const script = require('./script');

describe('Background Theme', () => {
    test('Toggles dark-mode class on body', () => {
        document.body.classList.remove('dark-mode');
        script.toggleTheme();
        expect(document.body.classList.contains('dark-mode')).toBe(true);

        script.toggleTheme();
        expect(document.body.classList.contains('dark-mode')).toBe(false);
    });
});

describe('Font Theme', () => {
    test('Toggles font between Arial and Times New Roman', () => {
        document.body.style.fontFamily = 'Arial, sans-serif';
        script.toggleFont();
        expect(document.body.style.fontFamily).toBe("'Times New Roman', serif");

        script.toggleFont();
        expect(document.body.style.fontFamily).toBe('Arial, sans-serif');
    });
});

describe('Keyboard event listeners', () => {
    beforeEach(() => {
        // Clears all previous calls to the mock functions
        jest.clearAllMocks();
    });

    test('Background Theme is called when the \'t\' key is pressed', () => {
        const event = new KeyboardEvent('keydown', { key: 't' });
        document.dispatchEvent(event);

        expect(document.body.classList.contains('dark-mode')).toBe(true);
    });

    test('Font Theme is called when the \'f\' key is pressed', () => {
        // Sets initial font family
        document.body.style.fontFamily = 'Arial, sans-serif';
        
        // Dispatches 'f' keydown event
        const event = new KeyboardEvent('keydown', { key: 'f' });
        document.dispatchEvent(event);

        // Checks if fontFamily has been toggled
        expect(document.body.style.fontFamily).toBe("'Times New Roman', serif");

        // Dispatches 'f' keydown event again to toggle back
        document.dispatchEvent(event);

        // Checks if fontFamily has been toggled back
        expect(document.body.style.fontFamily).toBe('Arial, sans-serif');
    });
});
