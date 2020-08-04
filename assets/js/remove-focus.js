//Sing in form
//const nameInput = document.querySelector(".input");
const nameField = document.getElementById("name-sing-in");
const passwordField = document.getElementById("password-sing-in");

nameField.addEventListener("focusin", () => nameField.classList.remove("input-field--active"));
passwordField.addEventListener("focusin", () => passwordField.classList.remove("input-field-password--active"));

//Sing up form
const focusSingUp = document.getElementById("name-sing-up");
const emailFocus = document.querySelector(".input-field-email");
const passwordFocus = document.getElementById("input-field-password-sing-up");

//Sing up focus name
focusSingUp.addEventListener("focusin", () => {
    focusSingUp.classList.add("input-field--focus")
});
focusSingUp.addEventListener("focusout", () => {
    focusSingUp.classList.remove("input-field--focus")
});

//Sing up focus email
emailFocus.addEventListener("focusin", () => {
    emailFocus.classList.add("input-field-email--focus")
});
emailFocus.addEventListener("focusout", () => {
    emailFocus.classList.remove("input-field-email--focus")
});

//Sing up focus password
passwordFocus.addEventListener("focusin", () => {
    passwordFocus.classList.add("input-field-password--focus")
})
passwordFocus.addEventListener("focusout", () => {
    passwordFocus.classList.remove("input-field-password--focus")
})

