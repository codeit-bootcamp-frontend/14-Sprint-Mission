const errorClass = 'sign-form__input--error';
export const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export function showInputError(id, text) {
    const input = document.querySelector(`#${id}`);
    const inputMsg = document.querySelector(`#msg-${id}`);

    input.classList.add(errorClass);
    inputMsg.classList.remove('hide');
    inputMsg.innerHTML = text;

    checkValidity();
}

export function hideInputError(id) {
    const input = document.querySelector(`#${id}`);
    const inputMsg = document.querySelector(`#msg-${id}`);

    input.classList.remove(errorClass);
    inputMsg.classList.add('hide');

    checkValidity();
}

function checkValidity() {
    const confirm = document.querySelector('#submit');
    let empty = false;
    document.querySelectorAll(`.sign-form__input`).forEach((input) => {
        if (!input.value) { empty = true; };
    });
    confirm.disabled = empty || (document.querySelectorAll(`.${errorClass}`).length > 0);
}