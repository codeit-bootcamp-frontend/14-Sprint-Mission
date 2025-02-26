# 스프린트 미션 5

## 기본 요구사항

- [x] Github에 PR(Pull Request)을 만들어서 미션을 제출합니다.
- [x] 피그마 디자인에 맞게 페이지를 만들어 주세요.
- [x] React를 사용합니다

## 체크리스트 [기본]

### 중고마켓

- [x] 중고마켓 페이지 주소는 “/items” 입니다.
- [x] 페이지 주소가 “/items” 일때 상단네비게이션바의 '중고마켓' 버튼의 색상은 “3692FF”입니다.
- [x] 상단 네비게이션 바는 이전 미션에서 구현한 랜딩 페이지와 동일한 스타일로 만들어 주세요.
- [x] 상품 데이터 정보는 https://panda-market-api.vercel.app/docs/#/ 에 명세된 GET 메소드 “/products” 를 사용해주세요.
- [x] '상품 등록하기' 버튼을 누르면 “/additem” 로 이동합니다. ( 빈 페이지 )
- [x] 전체 상품에서 드롭 다운으로 “최신 순” 또는 “좋아요 순”을 선택해서 정렬을 할 수 있습니다.

### 중고마켓 반응형

- 베스트 상품
  - [x] Desktop : 4개 보이기
  - [x] Tablet : 2개 보이기
  - [x] Mobile : 1개 보이기
- 전체 상품
  - [x] Desktop : 12개 보이기
  - [x] Tablet : 6개 보이기
  - [x] Mobile : 4개 보이기

## 체크리스트 [심화]

- [x] 페이지 네이션 기능을 구현합니다.

## 변경 사항

- CSS ➡ SCSS 적용 및 파일 전환
- API 통신 시 axios 적용
- 상품 목록 스켈레톤 UI 적용

## 구현 화면

### 1) Desktop

![items-page-desktop](./src/assets/screenshot/items-page-desktop.png)

### 2) Tablet

![items-page-tablet](./src/assets/screenshot/items-page-tablet.gif)

### 3) Mobile

![items-page-mobile](./src/assets/screenshot/items-page-mobile.gif)

## 설치 사항

1. Getting Start React Project with Vite

```
npm create vite@latest sprint-mission -- --template react
```

2. Styling with SCSS

```
npm install scss
```

3. send request with axios

```
npm install axios
```

## Q&A

- 페이지네이션의 깜빡임을 개선할 수 있는 방안이 궁금합니다.
