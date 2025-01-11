# 01. 스프린트 미션 1

## 요구사항

### 스프린트 미션 1 시안

- [실습 과제 디자인 Figma](https://www.figma.com/file/IVkRlYWHY74QlgmxqA99Ym/%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EB%AF%B8%EC%85%98?type=design&node-id=55-1511&mode=design&t=bKrRR4qOAWuHB3fx-0)

### 기본 요구사항

- [ ] [UI 디자인 기초 토픽](https://www.codeit.kr/topics/ui-design-basics) 수강
- [x] 피그마 디자인에 맞게 페이지 생성 및 UI 라이브러리 미사용
- [x] HTML, CSS 파일을 Netlify로 배포
  - 링크: https://fe-14-sprint-mission-1-basic-lsj.netlify.app/
- [x] PC사이즈만 고려해 주어진 디자인으로 구현

### 체크리스트 [기본]

- 기본
  - [x] 랜딩 페이지 url path: 루트('/')로 설정
  - [x] title "판다마켓" 설정

- 여백
  - [x] 화면 너비 1920px 이상: 하늘색 배경색, 내부 요소 위치 고정, 여백만 커지도록
  - [x] 화면 너비 1920px 미만: 헤더 좌우 여백 200px 유지, 헤더 간격 죽어들도록

- 페이지 이동
  - [x] 사용자가 클릭할 수 있는 요소는 CSS 속성 cursor: pointer 설정
  - [x] "판다마켓" 클릭 시 루트 페이지('/')로 이동
  - [x] '로그인' 버튼 클릭 시 로그인 페이지('/login')로 이동
  - [x] "구경하러가기" 버튼 클릭 시('/items')로 이동
  - [x] "Privacy Policy", "FAQ" 클릭 시 각각 Privacy 페이지('/privacy'), FAQ 페이지('/faq')로 이동
  - [x] 페이스북, 트위터, 유튜브, 인스타그램 아이콘 클릭 시 각각의 홈페이지로 새로운 창 열어 이동

### 체크리스트 [심화]

- [x] 사용자의 브라우저가 크고 작아짐에 따라 페이지의 요소간 간격, 요소의 크기, font-size 등 모든 크기와 관련된 값이 크고 작아지도록 설정해 보세요.(설정값은 자유입니다)

## 주요 변경사항

- [common.css](./styles/common.css)
  - button 스타일 지정
- [variables.css](./styles/variables.css)
  - 색상 변수 등록 및 텍스트 색상 지정 (`.text-primary-100`)
  - 클래스명 `.text-bold`, `.text-3xl` 등 활용으로 텍스트 스타일 지정
  - 클래스명 `.grid`, .`flex` 활용으로 CSS grid & flex 스타일 기본 지정


## 스크린샷

![desktop-page-image](./assets/screenshot/landing-page-desktop.png)

## 멘토에게

-
-
- [ ] 셀프 코드 리뷰를 통해 질문 이어가겠습니다.
