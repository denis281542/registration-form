const showPassword = document.querySelector(".fas.fa-eye");
const passwordHidden = document.querySelector(".password-text");

showPassword.onclick = () => {
    if (passwordHidden.getAttribute('type') == 'password') {
        passwordHidden.setAttribute('type', 'text');
    } else {
        passwordHidden.setAttribute('type', 'password');
    }
  };