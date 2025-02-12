import { check,errorMessageOutput,buttonClickLocation,eyesButtonClick,MESSAGE } from './functions.js';

const CkeckedArray = ['error','error','error','error'];
const loginInput = document.querySelectorAll('input');
const loginPwd = document.querySelector('#login_pwd');
const button = document.querySelector('#submit');
const eyeIcon = document.querySelectorAll('.eye');

// 버튼 활성화
const BottonClick = (button,ckecked = []) => {
  const result = ckecked.every((value) => value === MESSAGE.OK);
  if( ckecked.length === 4 && result) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// 모든 체크박스 체크
function ALLckecked (el){
  const Value = el.currentTarget.value;
  const id = el.currentTarget.getAttribute('id');
  let Message = '';
  if( id === 'login_email' ){
    Message = check.EmailChecked(Value);
    CkeckedArray[0] = (Message === MESSAGE.OK)? Message: 'error';
  } else if( id === 'login_name' ) {
    Message = check.NameChecked(Value);
    CkeckedArray[1] = (Message === MESSAGE.OK)? Message: 'error';
  } else if( id === 'login_pwd' ) {
    Message = check.passwordChecked(Value);
    CkeckedArray[2] = (Message === MESSAGE.OK)? Message: 'error';
  } else if(  id === 'login_pwd_check' ) {
    Message = check.passwordDoubleChecked(Value,loginPwd.value);
    CkeckedArray[3] = (Message === MESSAGE.OK)? Message: 'error';
  }
  return Message;
}

// focusout 이벤트 리스너 추가
loginInput.forEach((input) => {
  input.addEventListener("focusout", (el) => {
    errorMessageOutput(el.currentTarget,ALLckecked (el));
    BottonClick(button,CkeckedArray);
  });
});

// 링크이동
buttonClickLocation(button,'login.html');

// 페스워드 눈 아이콘 클릭
eyeIcon.forEach((el) => {
  eyesButtonClick(el); 
});