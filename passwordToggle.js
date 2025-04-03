//password의 type을 읽어와 토글, 이미지 또한 토글
export const togglePassword = (e) => {
  const toggleButtonImg = e.currentTarget.firstElementChild;
  const passwordInput = e.currentTarget.previousElementSibling;

  if (passwordInput) {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    toggleButtonImg.src = toggleButtonImg.src.endsWith("btn_visibility_off.svg")
      ? "./images/auth/btn_visibility_on.svg"
      : "./images/auth/btn_visibility_off.svg";
  }
};

//html 클래스명을 이용해서 모든 토글 버튼에 이벤트 리스너 등록
export const setupPasswordToggle = () => {
  document.querySelectorAll(".form__password-toggle").forEach((button) => {
    button.addEventListener("mousedown", (e) => {   //'click'이벤트 사용시 focusout이벤트가 먼저 실행되는 문제가 있었음
      e.preventDefault();
      togglePassword(e); 
    });
  });
};
