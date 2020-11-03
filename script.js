const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container'); // to select html element, css class, etc (in this case, target css)
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity(); // Check the validity of each column input
    
    //Style main message for an error
    if (!isValid){
        message.textContent = '***Please fill out all fields.***';
        message.style.color = 'red'
        return;
    }
    
    // Validate Password Matching
    if(password1El.value ===password2El.value) {
        passwordMatch = true;
        password1El.style.bordercolor = 'green';
        password2El.style.bordercolor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make Sure Password Match.';
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // Success Message
    if(isValid && passwordMatch) {
        message.textContent = '***Successfully Signed Up!***';
        message.style.color = 'green'
    }
}
// Store The Form Data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    //Do Something (add in database, etc)
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();

    //Submit data if valid
    if(isValid && passwordMatch) {
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);

