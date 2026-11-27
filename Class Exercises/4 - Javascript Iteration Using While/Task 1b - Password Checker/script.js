// Add your event listener and while loop code here
// When the button is clicked, use a while loop to check the password until correct
const button = document.getElementById('checkBtn')
let passwordInput = document.getElementById('passwordInput').value;

button.addEventListener('click', () => {
    checkPassword();
});

function checkPassword() {
        while (passwordInput != "letmein") {
        if (passwordInput != "letmein"){
        document.getElementById('message').textContent = 'wrong password';
        }   
            else {




        document.getElementById('message').textContent = 'Corrrect Password';    

        }}}