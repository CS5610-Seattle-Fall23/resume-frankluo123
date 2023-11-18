/**
 * Personal Website Project JavaScript Code 
 * @author Frank Luo
 **/


// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Function to toggle between two font types
function toggleFont() {
    const body = document.body;
    if (body.style.fontFamily === "Arial, sans-serif") {
        body.style.fontFamily = "'Times New Roman', serif"; 
    } else {
        body.style.fontFamily = "Arial, sans-serif";
    }
}

// For keyboard accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 't') { // Press 't' to toggle theme
        toggleTheme();
    }
    if (event.key === 'f') { // Press 'f' to toggle font
        toggleFont();
    }
});

// Exports
module.exports = { toggleTheme, toggleFont };