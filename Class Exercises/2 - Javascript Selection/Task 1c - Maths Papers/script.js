// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    document.getElementById('paper1').value
    document.getElementById('paper2').value
    document.getElementById('paper3').value
    // TODO: Calculate the total mark
    totalMarks = paper1 + paper2 + paper3
    // TODO: Check if total is greater than 160
    let total;
    if (total > 160)
        grade = pass
    // TODO: Display the total mark and whether the student passed or failed
}
