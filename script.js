// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    const numberDisplay = document.getElementById('randomNumber');
    const button = document.getElementById('generateBtn');
    
    // Add loading state to button
    button.disabled = true;
    button.textContent = 'Generating...';
    
    // Add animation class
    numberDisplay.classList.add('number-change');
    
    // Generate random number after a short delay for better UX
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numberDisplay.textContent = randomNumber;
        
        // Remove animation class
        numberDisplay.classList.remove('number-change');
        
        // Reset button
        button.disabled = false;
        button.textContent = 'Generate Random Number';
        
        // Add some visual feedback based on the number
        addNumberFeedback(randomNumber);
        
    }, 500);
}

// Function to add visual feedback based on the generated number
function addNumberFeedback(number) {
    const numberDisplay = document.getElementById('randomNumber');
    
    // Remove any existing color classes
    numberDisplay.classList.remove('low-number', 'medium-number', 'high-number');
    
    // Add color class based on number range
    if (number <= 33) {
        numberDisplay.classList.add('low-number');
    } else if (number <= 66) {
        numberDisplay.classList.add('medium-number');
    } else {
        numberDisplay.classList.add('high-number');
    }
}

// Add keyboard support (Enter key to generate number)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const button = document.getElementById('generateBtn');
        if (!button.disabled) {
            generateRandomNumber();
        }
    }
});

// Add some additional CSS classes for number feedback
const style = document.createElement('style');
style.textContent = `
    .low-number {
        color: #ff6b6b !important;
        text-shadow: 0 0 10px rgba(255, 107, 107, 0.5) !important;
    }
    
    .medium-number {
        color: #feca57 !important;
        text-shadow: 0 0 10px rgba(254, 202, 87, 0.5) !important;
    }
    
    .high-number {
        color: #48dbfb !important;
        text-shadow: 0 0 10px rgba(72, 219, 251, 0.5) !important;
    }
`;
document.head.appendChild(style);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Random Number Generator loaded successfully!');
    
    // Add focus to button for better accessibility
    const button = document.getElementById('generateBtn');
    button.focus();
});
