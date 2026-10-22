// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    let display = document.getElementById('countdownDisplay');
    let button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    if (isNaN(startNum) || isNaN(delay)) {
        display.innerHTML = "check if numbers are real" }
        return;

    // Check if start number is positive
    if (startNum <= 1) {
        display.innerHTML = "Start number must be greater than 1";
        return;
    }
    
    // Check if delay is at least 100ms
    if (delay <= 100) {
        return;
    }


    // TODO: Disable button during countdown
    button.disabled = true;



    }
    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    let currentNum = startNum;

    function tick() {
        if (current >= 0) {
            display.innerHTML = currentNum;
            currentNum--;
        }

    } 
    // Use setTimeout to create the delay between numbers
    setTimeout (tick, delay);
} else {
    // TODO: Show "Blast off!" at the end
    document.getElementById('countdownDisplay').innerHTML = "Blast off!"
    // TODO: Re-enable button after countdown finishes
    button.disabled = false;
    tick();


// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
}
