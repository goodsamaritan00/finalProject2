// Dropdown Menu

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

// Register Form

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const phone = document.getElementById('phone')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const usernameValue = username.value.trim() 
    const emailValue = email.value.trim() 
    const passwordValue = password.value.trim() 
    const repeatPasswordValue = repeatPassword.value.trim()
    const phoneValue = phone.value.trim();

    if(firstnameValue === '') {
        setErrorFor(firstname, 'This field cant be empty');
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'This field cant be empty');
    } else {
        setSuccessFor(lastname);
    }

    if(usernameValue === '') {
        setErrorFor(username, 'This field cant be empty');
    } else {
        setSuccessFor(username);
    }


    if(emailValue === '') {
        setErrorFor(email, 'This field cant be empty');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }


    if(passwordValue === '') {
        setErrorFor(password, 'This field cant be empty');
    } else {
        setSuccessFor(password);
    }

    if(repeatPasswordValue === '') {
        setErrorFor(repeatPassword, 'This field cant be empty');
    } else if(passwordValue !== repeatPasswordValue) {
        setErrorFor(repeatPassword, 'Passwords dont match');
    } else {
        setSuccessFor(repeatPassword);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'This field cant be empty');
        
    } else {
        setSuccessFor(phone);
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}