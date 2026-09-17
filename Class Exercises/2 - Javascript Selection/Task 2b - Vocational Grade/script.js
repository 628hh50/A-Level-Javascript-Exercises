// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let practical = parseInt(document.getElementById('practical').value)
    let theory = parseInt(document.getElementById('theory').value) 
    // TODO: Check if both scores are above 50% (Pass requirement)
    percentage = (practical + theory)/2
    if (practical > 50) and (theory >50){
        grade = "pass"
    }
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    else if (grade = "pass") and (theory > 70) and (practical > 70)
        grade = "distinction"
    }
    else{ (grade = fail)
    }   
        // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score
    document.getElementById('result').textContent = `Your grade is ${grade} and your average score is ${averageScore}`
}
