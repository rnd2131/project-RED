// Select DOM elements
const tapButton = document.getElementById('tapButton');
const scoreDisplay = document.getElementById('scoreDisplay');

// Initialize the score, check if there's a saved score
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

// Update the display
scoreDisplay.textContent = score;

// Function to handle the tap
function handleTap() {
    score++; // Increment score by 1 on each tap
    scoreDisplay.textContent = score; // Update the displayed score
    localStorage.setItem('score', score); // Save the score to local storage
}

// Event listener for the button tap
tapButton.addEventListener('click', handleTap);

// Function to load saved score (called on page load)
function loadSavedScore() {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
        score = parseInt(savedScore);
        scoreDisplay.textContent = score;
    }
}

// Call loadSavedScore when the game starts
loadSavedScore();
