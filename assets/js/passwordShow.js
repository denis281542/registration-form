// Sing in
const showPassword = document.querySelector(".fas.fa-eye");
const passwordHidden = document.querySelector(".password-text");

showPassword.onclick = () => {
    if (passwordHidden.getAttribute('type') == 'password') {
        passwordHidden.setAttribute('type', 'text');
    } else {
        passwordHidden.setAttribute('type', 'password');
    }

    showPassword.classList.toggle('fa-eye-slash');
};

// Sing up
const sungUpEye = document.querySelector(".sing-up-form .fas.fa-eye");
const singUpPass = document.querySelector(".sing-up-form input[type=password]");

sungUpEye.onclick = () => {
    if (singUpPass.getAttribute('type') == 'password') {
        singUpPass.setAttribute('type', 'text');
    } else {
        singUpPass.setAttribute('type', 'password');
    }
    sungUpEye.classList.toggle('fa-eye-slash');
}
