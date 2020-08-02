const sing_in_btn = document.querySelector('#sing-in-btn');
const sing_up_btn = document.querySelector('#sing-up-btn');
const container = document.querySelector('.container');

sing_up_btn.addEventListener('click', () => {
    container.classList.add("sing-up-mode");
});

sing_in_btn.addEventListener('click', () => {
    container.classList.remove("sing-up-mode");
});
