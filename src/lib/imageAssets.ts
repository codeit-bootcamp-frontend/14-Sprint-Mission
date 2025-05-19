
/** 허용된 외부 이미지 도메인 (next.config.ts, 클라이언트 공통 사용) */
export const allowedImageDomains = [
  "cdn.wccftech.com",
  "example.com",
  "image.hanatour.com",
  "cdn.choicenews.co.kr",
  "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
  "cdn.pixabay.com",
  "i.pinimg.com",
  "upload.wikimedia.org",
  "image.hanatour.com",
  "encrypted-tbn0.gstatic.com",
  "health.chosun.com",
  "via.placeholder.com",
  "images.unsplash.com",
];

/** 허용된 이미지 확장자 (정규식 검사용) */
export const imageExtensionRegex = /\.(jpe?g|png|webp|gif)$/i;

/** fallback 이미지 경로 */
export const defaultImg = '/assets/img/img_default_2x.png';

export const logoImg1 = '/assets/logo_01.svg';
export const logoImg2 = '/assets/logo_03.svg';

export const emptyImg = '/assets/img/Img_inquiry_empty_2x.png';
export const replyEmptyImg = '/assets/reply_empty.svg';
export const imgHome_top = '/assets/Img_home_top.png';
export const imgHome1 = '/assets/Img_home_01.png';
export const imgHome2 = '/assets/Img_home_02.png';
export const imgHome3 = '/assets/Img_home_03.png';
export const imgHome_bottom = '/assets/Img_home_bottom.png';

export const eyeOpen = '/assets/eye_1.svg';
export const eyeClose = '/assets/eye_2.svg';

export const facebookIcon = '/assets/ic_facebook.svg';
export const twitterIcon = '/assets/ic_twitter.svg';
export const instagramIcon = '/assets/ic_instagram.svg';
export const youtubeIcon = '/assets/ic_youtube.svg';

export const sns_google = '/assets/gg_icon.png';
export const sns_kakao = '/assets/kakao_icon.png';

export const tempUserImg = '/assets/ic_3_01.png';