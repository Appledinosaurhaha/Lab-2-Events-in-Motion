// BOM Feature 1: Display current time when page loads
window.addEventListener('load', function() {
    const timeSpan = document.getElementById('time');
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString();
});

// Change 1: Click event listener on button to change background color
const colorBtn = document.getElementById('color-btn');
const colors = ['#f4f4f9', '#e3f2fd', '#e8f5e9', '#fff3e0'];
let colorIndex = 0;

colorBtn.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

// Change 2: Keyboard event listener (keyup) to update text dynamically
const userInput = document.getElementById('user-input');
const outputText = document.getElementById('output-text');

userInput.addEventListener('keyup', function(event) {
    if (event.target.value === '') {
        outputText.textContent = 'Your text will appear here.';
    } else {
        outputText.textContent = 'You typed: ' + event.target.value;
    }
});

// Change 3: BOM Feature (window resize) to track window width
const widthSpan = document.getElementById('window-width');
widthSpan.textContent = window.innerWidth;

window.addEventListener('resize', function() {
    widthSpan.textContent = window.innerWidth;
});