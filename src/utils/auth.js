
export const MEMBER_MESSAGE = {
	enterEmail : '이메일을 입력해주세요.',
	wrongEmail : '잘못된 이메일 형식입니다.',
	enterName :  '닉네임을 입력해주세요.',
	enterPassword : '비밀번호를 입력해주세요.',
	checkPassword : '비밀번호를 8자 이상 입력해주세요.',
	wrongPassword : '비밀번호가 일치하지 않습니다.',
}

export const memberCheck = {
  PasswordLength : 8,
  checkEmail : (email) => { 
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  }, 
  checkPassword : (password) => {
    return password.length >= memberCheck.PasswordLength;
  },
  EmailChecked : (email) => {
    let errorMessage = '';
    if(email === '') {
      errorMessage = MEMBER_MESSAGE.enterEmail;
    } else if ( !memberCheck.checkEmail(email)) {
      errorMessage = MEMBER_MESSAGE.wrongEmail;
    } else {
      errorMessage = '';
    }
    return errorMessage;
  },
  NameChecked: (name) => {
    let errorMessage = '';
    if(name === '') {
      errorMessage = MEMBER_MESSAGE.enterName;
    } else {
      errorMessage = '';
    }
    return errorMessage;
  },
  passwordChecked: (password) => {
    let errorMessage = '';
    if(password === '') {
      errorMessage = MEMBER_MESSAGE.enterPassword;
    } else if ( !memberCheck.checkPassword(password)) {
      errorMessage = MEMBER_MESSAGE.checkPassword;
    } else {
      errorMessage = '';
    }
    return errorMessage;
  },
  passwordDoubleChecked: (password, passwordDouble) => {
    let errorMessage = '';
    if(password === '') {
      errorMessage = MEMBER_MESSAGE.enterPassword;
    } else if(password !== passwordDouble) {
      errorMessage = MEMBER_MESSAGE.wrongPassword;
    } else {
      errorMessage = '';
    }
    return errorMessage;
  },
}