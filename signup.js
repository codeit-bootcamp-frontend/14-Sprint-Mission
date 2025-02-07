import {pwd,email,nick,confirmPwd,signBtn,visibilityIcon} from './common.js'
import {checkedPwd,checkedEmail,removeErrorMessage,visibileIcon,confirmPassword,checkedNickname} from './common.js'
const pwdParent = document.querySelector('.password-container');

// 비밀번호 체크
pwd.addEventListener('focusout',checkedPwd);
pwd.addEventListener("focusin", () => removeErrorMessage(pwd));

// 이메일 체크
email.addEventListener("focusout",checkedEmail);
email.addEventListener('focusin',()=>removeErrorMessage(email));


// 닉네임 체크
nick.addEventListener("focusout",checkedNickname);
nick.addEventListener("focusin",()=>removeErrorMessage(nick));

// 비밀번호 확인
confirmPwd.addEventListener("focusout", confirmPassword);
confirmPwd.addEventListener("focusin", () => removeErrorMessage(confirmPwd));

// 비밀번호 보이기 아이콘 변화
  visibilityIcon.forEach((icon,i) => {
    icon.addEventListener("mousedown", ()=>visibileIcon(event,
      visibilityIcon[i]
      ,visibilityIcon[i].parentElement.firstElementChild));
  });

// 회원가입 버튼 체크
function blockLoginBtn(){
  if(document.querySelector('.alert-empty')||email.value==='' 
    || !email.value.includes('@')||email.value.split("@")[1] === ""||email.value.split("@")[0] === ""
    ||pwd.value==''||pwd.value.length < 8
    ||nick.value===''||pwd.value !== confirmPwd.value){
      signBtn.classList.remove('ok-btn')
      signBtn.removeAttribute('href');
  }else{
    signBtn.classList.add('ok-btn')
    signBtn.setAttribute('href','signin.html')
  }
}
signBtn.addEventListener('click',()=>{
    checkedEmail();
    checkedPwd();
    checkedNickname();
    confirmPassword()
    blockLoginBtn();
  });

  signBtn.addEventListener('mouseover',blockLoginBtn);







