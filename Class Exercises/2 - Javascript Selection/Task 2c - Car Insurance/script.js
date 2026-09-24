// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseInt(document.getElementById('age').value)
    let noClaims = parseInt(document.getElementById('noClaims').value)
    let previousClaims = parseInt(document.getElementById('previousClaims').value)
    // TODO: Calculate base premium (£500)
    basePremium = 500

    // TODO: Apply age adjustment
    // Under 25: +50%
        if (age <25) {
        basePremium = basePremium + (basePremium * 0.5)
        }

    // 25-40: No change

        else if (age >= 25 && age <= 40 ){
        basePremium = basePremium
    }
    // Over 40: -15%
        else if (age <25) {
        basePremium = basePremium - (basePremium * 0.15)
        }

    // TODO: Apply no claims bonus
    // 0 years: No discount
    if (noClaims == 0 ){
        basePremium = basePremium
    } 
    // 1-2 years: 10% discount
    else if (noClaims == 1 || noClaims == 2){
        basePremium = basePremium - (basePremium / 10)
    }
    // 3-5 years: 25% discount
    else if (noClaims >= 3 && noClaims <= 5){ 
        basePremium = basePremium - (basePremium * 0.25)
    }
    // Over 5 years: 35% discount
    else if (noClaims > 5){
        basePremium = basePremium - (basePremium * 0.35)
    }
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    for (let i = 0;i < previousClaims;i++){
        console.log(basePremium)
        basePremium = basePremium + (basePremium * 0.2)
    }
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById(`result`).textContent = `Your final premium is £${basePremium}`
}
