import { showInputError, hideInputError, regEmail } from "./sign.js";

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const showPasswords = document.querySelectorAll('.show-password');
const nickname = document.querySelector('#nickname');

email.addEventListener('focusout', (e) => {
    const value = e.target.value;
    
    if (!value) { showInputError('email', '이메일을 입력해주세요'); }
    else if (!regEmail.test(value)){ showInputError('email', '잘못된 이메일 형식입니다'); }
    else { hideInputError('email'); };
});

nickname.addEventListener('focusout', (e) => {
    const value = e.target.value;

    if (!value) { showInputError('nickname', '닉네임을 입력해주세요'); }
    else { hideInputError('nickname'); };
});

password.addEventListener('focusout', (e) => {
    const value = e.target.value;
    
    if (!value) { showInputError('password', '비밀번호를 입력해주세요'); }
    else if (value.length < 8){ showInputError('password', '비밀번호를 8자 이상 입력해주세요'); }
    else { hideInputError('password'); };

    //Check confirm password again
    if ((value != confirmPassword.value) && (document.querySelector('.activated'))) { showInputError('confirm-password', '비밀번호가 일치하지 않습니다'); }
    else { hideInputError('confirm-password'); };
});

showPasswords.forEach((showPassword) => {
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
});

confirmPassword.addEventListener('focusout', (e) => {
    const value = e.target.value;
    e.target.classList.add('activated');
    
    if (value != password.value) { showInputError('confirm-password', '비밀번호가 일치하지 않습니다'); }
    else { hideInputError('confirm-password'); };
});

document.querySelector('.sign-form').addEventListener('submit', (e) => {
    e.preventDefault();

    //회원가입을 끝냈는데 다시 회원가입으로 가는 게 이상해서 로그인으로 변경했습니다.
    window.location.href = '/login.html';
});