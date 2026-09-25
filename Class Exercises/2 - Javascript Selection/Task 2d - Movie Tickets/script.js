// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    const adultTickets = parseInt(document.getElementById('adultTickets').value)
    const childTickets = parseInt(document.getElementById('childTickets').value)
    const seniorTickets = parseInt(document.getElementById('seniorTickets').value)
    let dayOfWeek = (document.getElementById('dayOfWeek').value)
    const showingTime = parseInt(document.getElementById('showingTime').value)
    // Adult: £12.00
    // Child: £8.00
    // Senior: £7.50
    adultTickets * 12 === adultTickets
    childTickets * 8 === childTickets
    seniorTickets * 7.5 === seniorTickets
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    if (dayOfWeek = friday || dayOfWeek = saturday || dayOfWeek = sunday) {
        
    }
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    
    // TODO: Calculate subtotal
    
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off
    if (adultTickets = 2 && childTickets = 2) {
        finalTotal = 0.9 
    }
    // TODO: Display price breakdown, subtotal, any discounts, and final total
}
