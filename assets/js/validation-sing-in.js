const form = document.getElementById("sing-in-form");

const submitForm = (event) => {
    event.preventDefault();
    const name = event.target.querySelector("input[type=text]").value;
    const nameHint = event.target.querySelector(".input-field");
    const password = event.target.querySelector(".password-text").value;
    const passwordHint = event.target.querySelector(".input-field-password");

    const isValidName = validateName(name);
    if (!isValidName) {
        nameHint.classList.add("input-field--active");
        return;
    }
    if (nameHint.classList.contains("input-field--active")) {
        nameHint.classList.remove("input-field--active");

        nameHint.classList.remove("input-field--active");
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
        passwordHint.classList.add("input-field-password--active");
        return;
    }
    if (passwordHint.classList.contains("input-field-password--active")) {
        passwordHint.classList.remove("input-field-password--active");
    }

};

form.addEventListener("submit", submitForm);

function validateName(name) {
    const re = /^([a-zA-Z ]){2,30}$/;
    return re.test(name);
}

function validatePassword(password) {
    const re = /^([a-zA-Z ]){2,30}$/;
    return re.test(password);
}

