// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    if (isNaN(startNum) || isNaN(delay)) {
        output.innerHTML = "check if numbers are real" }
    // Check if start number is positive
    if (startNum <= 1) {}
    // Check if delay is at least 100ms
    if (delay <= 100) {}
    // TODO: Disable button during countdown
    
    // TODO: Create the countdown loop

    // Use a for loop counting backwards
    for 
    // Use setTimeout to create the delay between numbers
    
    // TODO: Show "Blast off!" at the end
    document.getElementById('countdownDisplay').innerHTML = "Blast off!"
    // TODO: Re-enable button after countdown finishes
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
