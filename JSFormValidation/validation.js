const form = document.getElementById('form');
const username = document.getElementById('userName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repassword = document.getElementById('rePassword');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rePasswordValue = repassword.value.trim();

    if (usernameValue === "") {
        //show error
        setErrorFor(username, "Username cannot be empty.")
    } else {
        //success
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be Empty');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be Empty');
    } else {
        setSuccessFor(password);
    }

    if (rePasswordValue === '') {
        setErrorFor(rePasswordValue, 'Password cannot be Empty');
    } else if (passwordValue !== rePasswordValue) {
        setErrorFor(rePasswordValue, 'Passwords does not match');
    } else {
        setSuccessFor(rePasswordValue);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}