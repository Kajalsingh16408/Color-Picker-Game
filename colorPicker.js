var noOfSquares = 6; // Number of squares
var arr = []; // Array to hold colors
var picked; // Color picked for the target
var squares = document.getElementsByClassName("square"); // Squares div elements
var targetColor = document.getElementById("targetColor"); // RGB display
var message = document.getElementById("message"); // Message display
var head = document.querySelector("h1"); // Heading
var reset = document.getElementById("NewColor"); // Reset button

// Initialize the game
init();

function init() {
    // Generate random colored palette
    arr = generateRandomColor(noOfSquares);
    // Get target color randomly from the array size
    picked = arr[randomPickedColorIndex()];
    // Updating target RGB display
    targetColor.textContent = picked;
    for (var i = 0; i < squares.length; i++) {
        // Setting square's color one by one to palette color
        squares[i].style.backgroundColor = arr[i];
        // Adding event listener to all squares
        squares[i].addEventListener("click", function () {
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "green";
                // When correct, set everything to the target color and set new color to Play Again
                changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again";
                message.style.color = "red";
                // To hide the wrong square, we will set it to background color
                this.style.backgroundColor = "#232323";
            }
        });
    }
    // Setting event listener for reset button
    reset.addEventListener("click", resetIn);
}

// To get the random color from existing palette
function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

// To get the random palette of colors
function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++)
        color.push(rgbGenerator());
    return color;
}

// To generate a single rgb
function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// When correct, change everything to the correct color
function changeColor(color) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
    head.style.backgroundColor = color;
}

// Set things when player try to reset
function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = arr[i];
}
