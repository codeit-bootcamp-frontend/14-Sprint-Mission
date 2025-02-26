import SocialGoogle from "../../../assets/images/login/social-google.svg";
import SocialKakao from "../../../assets/images/login/social-kakao.svg";

export default function SocailLogin() {
  return (
    <div className="display-flex justify-sides radius-8" id="sns-login-wrapper">
      <div className="text-lg text-medium">간편 로그인 하기</div>
      <ul id="sns-login" className="display-flex justify-right gap-16">
        <li>
          <a href="" target="_blank">
            <img src={SocialGoogle} id="goggle" alt="구글 로그인" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={SocialKakao} id="kakao" alt="카카오 로그인" />
          </a>
        </li>
      </ul>
    </div>
  );
}
