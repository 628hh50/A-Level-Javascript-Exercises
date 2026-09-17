// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
     let paper1 = parseInt(document.getElementById('comp1').value)
     let paper2 = parseInt(document.getElementById('comp2').value)
     let paper3 = parseInt(document.getElementById('comp3').value)
     let paper4 = parseInt(document.getElementById('comp4').value)

    // TODO: Calculate the total marks
    totalMarks = paper1 + paper2 + paper3 + paper4 
    // TODO: Calculate the percentage (total possible marks is 400)
    percentage = (totalMarks/400) * 100
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    if (percentage >= 80){
        grade = "A"
    }
    else if (percentage >= 70){
        grade = "B"
    }
    else if (percentage >= 60){
        grade = "C"
    }
    else if (percentage >= 50){
        grade = "D"
    }
    else if (percentage >= 40){
        grade = "E"
    }
    else {
        grade = "U"
    } 
    
    // TODO: Display the percentage and grade
    document.getElementById('result').textContent = `Your percentage is ${percentage} and your grade is ${grade}`
}
