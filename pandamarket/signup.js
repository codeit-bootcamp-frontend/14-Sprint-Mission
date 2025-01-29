const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const nickname = document.querySelector('#nickname');
const form = document.querySelector('form');

let passwordValue = '';
let passwordValueConfirm = '';

// 이메일 검사
email.addEventListener('blur', () => {
    const focusout = email.value.trim();
    const errorMessageLogin = document.querySelector('#error-message-login');
    console.log(errorMessageLogin);

    if (focusout.includes('@')) {
        errorMessageLogin.remove();
    } else if (focusout === '' || focusout === null || focusout === undefined) {
        if (errorMessageLogin !== null && !focusout.includes('@')) {
            errorMessageLogin.remove();
        }
        email.classList.add('error');
        const emptySpan = document.createElement('span');
        emptySpan.id = 'error-message-login';
        emptySpan.textContent = '이메일을 입력해주세요.';
        if (!document.querySelector('#error-message-login')) {
            email.after(emptySpan);
        }
    }
    else if (focusout !== '' && !focusout.includes('@')) {
        if (errorMessageLogin !== null) {
            errorMessageLogin.remove();
        }
        email.classList.add('error');
        const errorSpan = document.createElement('span');
        errorSpan.id = 'error-message-login';
        errorSpan.textContent = '잘못된 이메일입니다.'
        if (!document.querySelector('#error-message-login')) {
            email.after(errorSpan);
        }

    }
})

// 비밀번호 검사
password.addEventListener('blur', () => {
    const focusout = password.value.trim();
    const errorMessagePassword = document.querySelector('#error-message-password');

    if (focusout.length >= 8) {
        passwordValue = focusout;
        password.classList.remove('error');
        errorMessagePassword.remove();
    } else if (focusout === '' || focusout === null || focusout === undefined) {
        if (errorMessagePassword !== null) {
            errorMessagePassword.remove();
        }
        password.classList.add('error');
        const emptySpan = document.createElement('span');
        emptySpan.id = 'error-message-password';
        emptySpan.textContent = '비밀번호를 입력해주세요.'
        if (!document.querySelector('#error-message-password')) {
            password.after(emptySpan);
        }
    }
    else {
        if (errorMessagePassword !== null) {
            errorMessagePassword.remove();
        }
        password.classList.add('error');
        const errorSpan = document.createElement('span');
        errorSpan.id = 'error-message-password';
        errorSpan.textContent = '비밀번호를 8자 이상 입력해주세요'
        if (!document.querySelector('#error-message-password')) {
            password.after(errorSpan);
        }
    }
})

// 비밀번호 확인 검사
passwordConfirm.addEventListener('blur', () => {
    const focusout = passwordConfirm.value.trim();
    const errorMessagePasswordConfirm = document.querySelector('#error-message-password-confirm');

    if (focusout !== null && focusout !== undefined && focusout !== '' && focusout.length > 8) {
        passwordValueConfirm = focusout;
        if (passwordValue !== passwordValueConfirm) {
            passwordConfirm.classList.add('error');
            const errorSpan = document.createElement('span');
            errorSpan.id = 'error-message-password-confirm';
            errorSpan.textContent = '비밀번호가 일치하지 않습니다.';
            console.log('비밀번호가 일치하지 않습니다.');
            if (!document.querySelector('#error-message-password-confirm')) {
                passwordConfirm.after(errorSpan);
            }
        } else {
            passwordConfirm.classList.remove('error');
            errorMessagePasswordConfirm.remove();
        }
    } else if (focusout === null || focusout === undefined || focusout === '') {
        passwordConfirm.classList.remove('error');
        console.log(errorMessagePasswordConfirm);
        if (errorMessagePasswordConfirm) {
            errorMessagePasswordConfirm.remove();
        }
    } else if (focusout.length < 8) {
        if (errorMessagePasswordConfirm !== null) {
            errorMessagePasswordConfirm.remove();
        }
        passwordConfirm.classList.add('error');
        const shortErrorSpan = document.createElement('span');
        shortErrorSpan.id = 'error-message-password-confirm';
        shortErrorSpan.textContent = '비밀번호를 8자 이상 입력해주세요';
        if (!document.querySelector('#error-message-password-confirm')) {
            passwordConfirm.after(shortErrorSpan);
        }
    }
})

// 닉네임 검사
nickname.addEventListener('blur', () => {
    const focusout = nickname.value.trim();
    const errorMessageNickname = document.querySelector('#error-message-nickname');

    if (focusout === null || focusout === '' || focusout === undefined) {
        nickname.classList.add('error');
        const errorSpan = document.createElement('span');
        errorSpan.id = 'error-message-nickname';
        errorSpan.textContent = '닉네임을 입력해주세요.';
        if (!document.querySelector('#error-message-nickname')) {
            nickname.after(errorSpan);
        }
    } else {
        errorMessageNickname.remove();
        nickname.classList.remove('error');
    }
})

form.addEventListener('submit', (e) => {
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (!emailValue.includes('@')) {
        e.preventDefault();
    } else if (passwordValue.length < 8) {
        e.preventDefault();
    }
})