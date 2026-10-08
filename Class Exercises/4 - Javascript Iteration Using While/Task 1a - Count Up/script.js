// Add your event listener and while loop code here
// When the button is clicked, display numbers 1 to N in the output area using a while loop
const button = document.getElementById('countBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    displayNumbers();
});


 function displayNumbers() {
    const numberInput = parseInt(document.getElementById('numberInput').value);
    let count = 1;
    let result = '';

    while (count <= numberInput){
    result += count + '<br>';
    count++;
    }

    output.innerHTML = result;
 }
