# Art Friendly
### 소개
- Art Friendly 서비스의 Front-end 저장소 입니다.
- React-native-webview를 사용하여 React와 React-native로 모바일 애플리케이션을 구현하였습니다.

<br />

### 주요 기능과 목적
- Art Friendly는 내 근처 전시 정보와 관련 리뷰 등을 제공합니다. 이를 통해 나에게 맞는 전시를 확인하고 방문할 수 있도록 돕습니다.
- 전시 취향 분석 테스트를 통해 어떤 전시 취향 인지 확인해 볼 수 있습니다.
- 관심 있는 전시를 저장하고 캘린더에 일정을 추가하여 좋아하는 전시를 놓치지 않고 방문할 수 있습니다.

<br />

# 설치
### 요구 사항
- node 18
- React 18.2.0
- React-native 0.73.6
- typescript 4.9.5

### 설치
```
$ git clone https://github.com/art-friendly-project/front-end.git
$ cd web
$ npm install
$ npm start
```

<br />

# 배포 주소
- https://front-end-seven-eta.vercel.app<br />
※ 웹 배포 주소 이므로 기능이 원활하게 작동하지 않을 수 있습니다.

<br />

# 개발 로그
<details>
  <summary><b>[ 2024. 05. 03. ] UI, 기능 구현 (1차)</b></summary>
  &nbsp;&nbsp; - &nbsp;로그인, 서비스 이용 약관, 접근 권한, 메인, 전시 목록, 관심 목록, 프로필 등 UI 구현
  <br />&nbsp;&nbsp; - &nbsp;모바일 하드웨어 뒤로가기 Webview에 적용
  <br />&nbsp;&nbsp; - &nbsp;메인 배너, 리뷰 슬라이드 기능 (Swiper 라이브러리 사용)
  <br />&nbsp;&nbsp; - &nbsp;안드로이드 위치, 사진첩, 알림, 달력 권한 설정 기능
  <br />&nbsp;&nbsp; - &nbsp;안드로이드 달력 연동한 전시 일정 추가 기능 (react-native-calendar-events 라이브러리 사용)
</details>
<details>
  <summary><b>[ 2024. 05. 03. ] UI, 기능 구현 (2차)</b></summary>
  &nbsp;&nbsp; - &nbsp;Lazy loading 기능 구현
  <br />&nbsp;&nbsp; - &nbsp;캘린더 선택 UI 변경
  <br />&nbsp;&nbsp; - &nbsp;프로필 수정 페이지 UI 구현
</details>
<details>
  <summary><b>[ 2024. 05. 17. ] UI, 기능 구현 (3차)</b></summary>
  &nbsp;&nbsp; - &nbsp;담벼락, 캘린더 일정 추가 UI 변경
  <br />&nbsp;&nbsp; - &nbsp;IOS 화면에 맞게 UI 수정
  <br />&nbsp;&nbsp; - &nbsp;IOS 권한 설정 추가(위치, 캘린더 등)
</details>
<details>
  <summary><b>[ 2024. 05. 27. ] UI, 기능 구현 (4차)</b></summary>
  &nbsp;&nbsp; - &nbsp;카카오 로그인 기능 구현
  <br />&nbsp;&nbsp; - &nbsp;전시목록, 담벼락, 프로필 등 데이터 조회 기능 구현
  <br />&nbsp;&nbsp; - &nbsp;담벼락 작성, 프로필 수정, mbti 검사 등 등록 및 수정 기능 구현
</details>
<details>
  <summary><b>[ 2024. 06. 03. ] UI, 기능 구현 (5차)</b></summary>
  &nbsp;&nbsp; - &nbsp;UI 일부 수정 및 삭제
  <br />&nbsp;&nbsp; - &nbsp;fetching, UI 오류 해결
  <br />&nbsp;&nbsp; - &nbsp;자동로그인, accessToken 재발급 기능 구현
</details>
<details>
  <summary><b>[ 2024. 06. 22. ] UI, 기능 구현 (6차)</b></summary>
  &nbsp;&nbsp; - &nbsp;UI 일부 수정 및 삭제
  <br />&nbsp;&nbsp; - &nbsp;Footer 추가
</details>
<details>
  <summary><b>[ 2024. 06. 26. ] UI, 기능 구현 (7차)</b></summary>
  &nbsp;&nbsp; - &nbsp;자동 로그인 기능 수정
  <br />&nbsp;&nbsp; - &nbsp;스크롤바 UI 변경
  <br />&nbsp;&nbsp; - &nbsp;전시 희망 취소 시 닉네임 나오도록 UI 수정
  <br />&nbsp;&nbsp; - &nbsp;전시 희망 수정 시 patch 요청 제대로 갈 수 있도록 요류 수정
  <br />&nbsp;&nbsp; - &nbsp;무한로딩, 서버요청 시 로딩 UI(스피너, 스켈레톤) 추가
</details>
<details>
  <summary><b>[ 2024. 06. 26. ] UI, 기능 구현 (8차)</b></summary>
  &nbsp;&nbsp; - &nbsp;화면 너비 맞게 UI 수정
  <br />&nbsp;&nbsp; - &nbsp;모바일 물리버튼 뒤로가기 기능 추가
</details>
<details>
  <summary><b>[ 2024. 08. 05. ] UI, 기능 구현 (9차)</b></summary>
  &nbsp;&nbsp; - &nbsp;react-query 도입
  <br />&nbsp;&nbsp; - &nbsp;모바일 물리버튼 뒤로가기 기능 수정
</details>
