import {pwd,email,loginBtn,visibilityIcon} from './common.js'
import {removeErrorMessage,visibileIcon,checkedPwd,checkedEmail} from './common.js'

// 비밀번호 체크
pwd.addEventListener('focusout',checkedPwd);
pwd.addEventListener("focusin", () => removeErrorMessage(pwd));

// 이메일 체크
email.addEventListener("focusout",checkedEmail);
email.addEventListener('focusin',()=>removeErrorMessage(email));

// 비밀번호 보이기 아이콘 변화
visibilityIcon.forEach((icon,i) => {
    icon.addEventListener("mousedown", ()=>visibileIcon(event,
      visibilityIcon[i]
      ,visibilityIcon[i].parentElement.firstElementChild));
  });

// 로그인 버튼 체크
function blockLoginBtn(){
  if(document.querySelector('.alert-empty')||email.value==='' 
    || !email.value.includes('@')||email.value.split("@")[1] === ""||email.value.split("@")[0] === ""
    ||pwd.value==''||pwd.value.length < 8){
    loginBtn.classList.remove('ok-btn')
    loginBtn.removeAttribute('href');
  }else{
    loginBtn.classList.add('ok-btn')
    loginBtn.setAttribute('href','items.html')
  }
}

loginBtn.addEventListener('click',()=>{
    checkedEmail();
    checkedPwd();
    blockLoginBtn();
  });

loginBtn.addEventListener('mouseover',blockLoginBtn);


