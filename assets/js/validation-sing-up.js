const formSingUp = document.getElementById('sing-up-form');

const submitFormSungUp = (event) => {
    event.preventDefault();
    const name = event.target.querySelector('input[type="text"]').value;
    const nameError = event.target.querySelector('.input-field');
    const email = event.target.querySelector('input[type="email"]').value;
    const emailError = event.target.querySelector('.input-field-email');

    const isValidName = validateName(name);
    if(!isValidName) {
        nameError.classList.add('input-field--active');
        return;
    };
    if(nameError.classList.contains('input-field--active')) {
        nameError.classList.remove('input-field--active');;
    };

    const isValidEmail = validateEmail(email);
    if(!isValidEmail) {
        emailError.classList.add('input-field-email--active');
        return;
    };
    if(emailError.classList.contains('input-field-email--active')) {
        emailError.classList.remove('input-field-email--active');;
    };
};

formSingUp.addEventListener("submit", submitFormSungUp);

//Utils
function validateName(name) {
    const re = /^([a-zA-Z ]){2,30}$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
