
/** 허용된 외부 이미지 도메인 (next.config.ts, 클라이언트 공통 사용) */
export const allowedImageDomains = [
  "cdn.wccftech.com",
  "example.com",
  "image.hanatour.com",
  "cdn.choicenews.co.kr",
  "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
  "bootcamp-project-api.s3.ap-northeast-2.amazonaws.com",
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