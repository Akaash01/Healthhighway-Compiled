const loginbtn = document.querySelector('#landing-joinus');
const logindiv = document.querySelector('.login-signup');
const closebtns = document.querySelectorAll('.close-btn-login');

loginbtn.addEventListener('click', () => {
    logindiv.classList.remove('inactive');
})

closebtns.forEach((btn) => { btn.addEventListener('click', () => { logindiv.classList.add('inactive') }) })