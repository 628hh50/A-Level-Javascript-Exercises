function startCountdown() {
    // 1. Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);

    // 2. Get display element and button
    let display = document.getElementById('countdownDisplay');
    let button = document.getElementById('startButton');

    // 3. Validate inputs
    if (isNaN(startNum) || isNaN(delay)) {
        display.innerHTML = "Check if numbers are real";
        return; // Stop the function if inputs are invalid
    }
    if (startNum <= 1) {
        display.innerHTML = "Start number must be greater than 1";
        return;
    }
    if (delay < 100) {
        display.innerHTML = "Delay must be at least 100ms";
        return;
    }

    // 4. Disable button during countdown
    button.disabled = true;

    // 5. Create the countdown tracking variables
    let currentNum = startNum;

    // 6. Define a helper function to handle the ticking countdown
    function tick() {
        if (currentNum >= 0) {
            display.innerHTML = currentNum;
            currentNum--; 
            
            // Wait for the specified delay, then run tick again
            setTimeout(tick, delay); 
        } else {
            // 7. Show "Blast off!" at the end
            display.innerHTML = "Blast off!";
            
            // 8. Re-enable button after countdown finishes
            button.disabled = false;
        }
    }

    // Start the first tick
    tick();
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
