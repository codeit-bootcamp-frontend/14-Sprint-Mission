

const MESSAGE = {
	enterEmail : '이메일을 입력해주세요.',
	wrongEmail : '잘못된 이메일 형식입니다.',
	enterName :  '닉네임을 입력해주세요.',
	enterPassword : '비밀번호를 입력해주세요.',
	checkPassword : '비밀번호를 8자 이상 입력해주세요.',
	wrongPassword : '비밀번호가 일치하지 않습니다.',
  OK : 'ok',
}

// check 객체 : 각 input의 값을 판단해 MESSAGE를 return한다. 
const check = {
  PasswordLength : 8,
  checkEmail : (email) => { 
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  }, 
  checkPassword : (password) => {
    return password.length >= check.PasswordLength;
  },
  EmailChecked : (email) => {
    let errorMessage = '';
    if(email === '') {
      errorMessage = MESSAGE.enterEmail;
    } else if ( !check.checkEmail(email)) {
      errorMessage = MESSAGE.wrongEmail;
    } else {
      errorMessage = MESSAGE.OK;
    }
    return errorMessage;
  },
  NameChecked: (name) => {
    let errorMessage = '';
    if(name === '') {
      errorMessage = MESSAGE.enterName;
    } else {
      errorMessage = MESSAGE.OK;
    }
    return errorMessage;
  },
  passwordChecked: (password) => {
    let errorMessage = '';
    if(password === '') {
      errorMessage = MESSAGE.enterPassword;
    } else if ( !check.checkPassword(password)) {
      errorMessage = MESSAGE.checkPassword;
    } else {
      errorMessage = MESSAGE.OK;
    }
    return errorMessage;
  },
  passwordDoubleChecked: (password, passwordDouble) => {
    let errorMessage = '';
    if(password === '') {
      errorMessage = MESSAGE.enterPassword;
    } else if(password !== passwordDouble) {
      errorMessage = MESSAGE.wrongPassword;
    } else {
      errorMessage = MESSAGE.OK;
    }
    return errorMessage;
  },
}



// 에러인 박스 메세지 표시
const errorMessageOutput = (el,errorMessage) => {
  const errorElement = el.parentElement;
  
  const notError = (e) => {
    if( errorElement.classList.contains('error_box') ) {
      errorElement.classList.remove('error_box');
      errorElement.querySelector('.error').remove();
    } 
  };
  const isError = (e) => {
    if (!errorElement.classList.contains('error_box')) {
      errorElement.classList.add('error_box');
      errorElement.insertAdjacentHTML('beforeend', `<span class="error">${errorMessage}</span>`);
    }
  };

  if(el.parentElement.tagName === 'LABEL') {
    return ( errorMessage === MESSAGE.OK ) ? notError() : isError();
  } else {
    return;
  }
};

// 클릭 링크이동
const buttonClickLocation = (el,link) => {
  el.addEventListener('click', (el) => {
    window.location.href = link ;
  });
};

// 눈 아이콘 클릭 이벤트
const eyesButtonClick = (el) => {
  el.addEventListener('click', (el) => { 
    const input = el.currentTarget.previousElementSibling;
    const inputType = input.getAttribute('type') === 'password'; 
    const iconSrc = ( inputType ) ? 'images/Default01.png' : 'images/Variant202.png'; 
    const iconType = ( inputType ) ? 'text' : 'password'; 
   
    input.setAttribute('type',iconType);
    el.currentTarget.setAttribute('src',iconSrc);
  });
};

export { check,errorMessageOutput,buttonClickLocation,eyesButtonClick,MESSAGE };


