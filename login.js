// Dropdown Menu

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

// Login  Form

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim() 
    const passwordValue = password.value.trim() 


    if(usernameValue) {  
        setSuccessFor(username); 
    } else {
        setErrorFor(username, 'This field cant be empty');
    }

    if(passwordValue === '') {
        setErrorFor(password, 'This field cant be empty');
    } else {
        setSuccessFor(password);
    }

}


function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

