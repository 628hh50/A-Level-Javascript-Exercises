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
    let adultTicketsNumber = parseInt(document.getElementById('adultTickets').value)
    let childTicketsNumber = parseInt(document.getElementById('childTickets').value)
    let seniorTicketsNumber = parseInt(document.getElementById('seniorTickets').value)
    let dayOfWeek = (document.getElementById('dayOfWeek').value)
    const showingTime = parseInt(document.getElementById('showingTime').value)
    // Adult: £12.00
    // Child: £8.00
    // Senior: £7.50
    adultTicketsNumber * 12 === adultTicketsPriceOriginal
    childTicketsNumber * 8 === childTicketsPriceOriginal
    seniorTicketsNumber * 7.5 === seniorTicketsPriceOriginal
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    if (dayOfWeek === friday || dayOfWeek === saturday || dayOfWeek === sunday) {
        childTicketsPriceOriginal + 2.50 === childTicketsPriceWeek
        adultTicketsPriceOriginal + 2.50 === adultTicketsPriceWeek
        seniorTicketsPriceOriginal + 2.50 === seniorTicketsPriceWeek
    }
    else {
        childTicketsPriceOriginal === childTicketsNumberOriginal
        childTicketsPriceTime === childTicketsPriceTime
        childTicketsPriceWeek === childTicketsPriceWeek

        adultTicketsPriceOriginal === adultTicketsPriceOriginal
        adultTicketsPriceTime === adultsTicketsPriceTime
        adultTicketsPriceWeek === adultsTicketsPriceWeek

        seniorTicketsPriceOriginal === seniorTicketsPriceOriginal
        seniorTicketsPriceTime === seniorTicketsPriceTime
        seniorTicketsPriceWeek === seniorTicketsPriceWeek

    }
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    if (time < 17_) {
        childTicketsPriceOriginal - 1.5 === childTicketsPriceTime
        adultTicketsPriceOriginal - 1.5 === adultTicketsPriceTime
        seniorTicketsPriceOriginal - 1.5 === seniorTicketsPriceTime
    }
    else {
        childTicketsPriceOriginal === childTicketsNumberOriginal
        childTicketsPriceTime === childTicketsPriceTime
        childTicketsPriceWeek === childTicketsPriceWeek

        adultTicketsPriceOriginal === adultTicketsPriceOriginal
        adultTicketsPriceTime === adultsTicketsPriceTime
        adultTicketsPriceWeek === adultsTicketsPriceWeek

        seniorTicketsPriceOriginal === seniorTicketsPriceOriginal
        seniorTicketsPriceTime === seniorTicketsPriceTime
        seniorTicketsPriceWeek === seniorTicketsPriceWeek


    }
    // TODO: Calculate subtotal
    subtotal = childTicketsNumberOriginal + seniorTicketsPriceOriginal + adultTicketsPriceOriginalt
    finalTotal = 
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off
    if (adultTickets = 2 && childTickets = 2) {
        finalTotal = 0.9 
    }
    // TODO: Display price breakdown, subtotal, any discounts, and final total
    document.getElementById(`result`).textContent = `Your final subtotal is £${subtotal}`

    document.getElementById(`result`).textContent = `Your final total is £${finalTotalotal}`
}