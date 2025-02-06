export const pwd = document.getElementById('login-pwd');
export const email = document.getElementById('login-email');
export const nick = document.getElementById('login-nickname');
export const confirmPwd = document.getElementById('login-pwd-confirm');
export const loginBtn = document.getElementById('login-btn');
export const signBtn= document.getElementById('sign-btn');
export const visibilityIcon = document.querySelectorAll(".visibility-off");

// 에러 메세지 추가
export function addErrorMessage(target,message) {
    removeErrorMessage(target);
    const error = document.createElement("div");
    error.textContent= message;
    error.classList.add("alert-empty");
    target.classList.add("empty");
    target.after(error);
  }
  
  // 에러 메세지 삭제
  export function removeErrorMessage(target){
    const error = target.nextElementSibling;
    if(error && error.classList.contains("alert-empty")){
      error.remove();
    }
    target.classList.remove("empty");
  }

  // 비밀번호 체크
export function checkedPwd(){
    if(pwd.value==''){
      addErrorMessage(pwd,'비밀번호를 입력해주세요');
    }else if (pwd.value.length < 8) {
      addErrorMessage(pwd, "비밀번호를 8자 이상 입력해주세요");
    }
  }
  
  // 이메일 체크
  export function checkedEmail(){
    if(email.value===''){
      addErrorMessage(email,'이메일을 입력해주세요');
    }else if(!email.value.includes('@')||email.value.split("@")[1] === ""||email.value.split("@")[0] === ""){
      addErrorMessage(email,'잘못된 이메일 형식입니다.')
    }
  }

  // 비밀번호 확인
export function confirmPassword() {

    if (confirmPwd.value === "") {
      addErrorMessage(confirmPwd, "비밀번호를 입력해주세요");
    } else if (pwd.value !== confirmPwd.value) {
      addErrorMessage(confirmPwd, "비밀번호가 일치하지 않습니다.");
    }
  }

  // 닉네임 체크
export function checkedNickname(){
    if(nick.value===''){
      addErrorMessage(nick,'닉네임을 입력해주세요');
    }
  }
  

  // 비밀번호 보이기 아이콘 변화
export function visibileIcon(event,icon,input) {
    event.preventDefault(); 
    icon.classList.toggle("on");
    if (icon.classList.contains("on")) {
        icon.setAttribute("src", "image/visibility_on.png");
        input.setAttribute("type", "text");
    } else {
        icon.setAttribute("src", "image/visibility_off.png");
        input.setAttribute("type", "password");
    }
}


