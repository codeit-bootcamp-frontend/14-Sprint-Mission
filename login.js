import { showInputError, hideInputError, regEmail } from "./sign.js";

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const showPassword = document.querySelector('.show-password');

email.addEventListener('focusout', (e) => {
    const value = e.target.value;
    
    if (!value) { showInputError('email', '이메일을 입력해주세요'); }
    else if (!regEmail.test(value)){ showInputError('email', '잘못된 이메일 형식입니다'); }
    else { hideInputError('email'); };
});

password.addEventListener('focusout', (e) => {
    const value = e.target.value;
    
    if (!value) { showInputError('password', '비밀번호를 입력해주세요'); }
    else if (value.length < 8){ showInputError('password', '비밀번호를 8자 이상 입력해주세요'); }
    else { hideInputError('password'); };
});

showPassword.addEventListener('mousedown', (e) => {
    const sibling = e.target.previousElementSibling;
    e.target.classList.remove('password-hide');
    sibling.type = 'text';
});

showPassword.addEventListener('mouseup', (e) => {   
    const sibling = e.target.previousElementSibling;
    e.target.classList.add('password-hide');
    sibling.type = 'password';
});

showPassword.addEventListener('mouseleave', (e) => {
    const sibling = e.target.previousElementSibling;
    e.target.classList.add('password-hide');
    sibling.type = 'password';
});

document.querySelector('.sign-form').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '/items';
});