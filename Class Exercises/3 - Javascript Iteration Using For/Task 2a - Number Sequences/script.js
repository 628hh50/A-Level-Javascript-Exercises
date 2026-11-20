// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const generateButton = document.getElementById('generateButton');
    const sequenceType = document.getElementById('sequenceType');
    const stepInput = document.getElementById('stepInput');
    
    // Show/hide step input based on sequence type
    sequenceType.addEventListener('change', function() {
        stepInput.classList.toggle('hidden', this.value !== 'steps');
    });
    
    // Add click event listener to the button
    generateButton.addEventListener('click', generateSequence);
});

// Function to generate number sequence
function generateSequence() {
    // TODO: Get the maximum number and sequence type from inputs
    let maxNumber = parseInt(document.getElementById('maxNumber').value);
    let sequenceType = document.getElementById('sequenceType').value;
    let total = 0
    let display = document.getElementById('sequenceDisplay').value;

    // TODO: Initialize array to store sequence
    let array1 = [];
    // TODO: Generate sequence based on type selected:
    // countUp: Use a for loop counting from 1 to N
    if ()
    for (let i = 1; i <= maxNumber; i++){
        total += i;
        display += `${i} + ${total} \n`;
    }

    // countDown: Use a for loop counting from N down to 1
    for (let i = 1; i <= maxNumber; i--){
        total -= maxNumber;
        console.log(total)
        display -=  `${i} - ${maxNumber}` 
    }

    // steps: Use a for loop with custom step value
    for (let i = 1; i <= maxNumber; i+stepInput) {
        total += stepInput
        display += `${i}+ ${stepInput}`
    }    

    // even: Use a for loop with if statement to check even numbers
     for (let i = 1; i <= maxNumber; i++) {
        if (maxNumber % 2 === 0) {
            equal = "even"
        } else {
            equal = "not even"        
        }
     }

    // odd: Use a for loop with if statement to check odd numbers
     for (let i = 1; i <= maxNumber; i++){
     if (maxNumber % 2 === 0) {
     equal = "even"
     }

    else {
    equal = "not even"    
        } 
     }
    // TODO: Calculate sum of sequence
   let sum = 0;
   for (let i = 1; i <= maxNumber; i++){
   }
    
    // TODO: Display sequence, count of numbers, and sum
    document.getElementById("sequenceDisplay").innertext = display;
    document.getElementById("sum").innertext = display;
    document.getElementById("count").innertext = display;  
    }
