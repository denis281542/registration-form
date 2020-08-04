//Sing in form
//const nameInput = document.querySelector(".input");
const nameField = document.getElementById("name-sing-in");
const passwordField = document.getElementById("password-sing-in");
//const nameFocus = document.getElementById("name");

nameField.addEventListener("focusin", () => nameField.classList.remove("input-field--active"));
passwordField.addEventListener("focusin", () => passwordField.classList.remove("input-field-password--active"));
//Focus name
nameField.addEventListener("focusin", () => nameField.classList.add("input-field--focus"))
//Blur name
nameField.addEventListener("focusout", () => nameField.classList.remove("input-field--focus"))
//Focus passwors
passwordField.addEventListener("focusin", () => passwordField.classList.add("input-field-password--focus"))
//Blur password
passwordField.addEventListener("focusout", () => passwordField.classList.remove("input-field-password--focus"))

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

