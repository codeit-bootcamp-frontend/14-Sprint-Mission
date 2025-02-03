const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');

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

password.addEventListener('blur', () => {
    const focusout = password.value.trim();
    const errorMessagePassword = document.querySelector('#error-message-password');

    if (focusout.length >= 8) {
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

form.addEventListener('submit', (e) => {
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (!emailValue.includes('@')) {
        e.preventDefault();
    } else if (passwordValue.length < 8) {
        e.preventDefault();
    }
})