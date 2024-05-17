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
  <summary><b>[ 2024. 5. 3. ] UI, 기능 구현 (1차)</b></summary>
  &nbsp;&nbsp; - &nbsp;로그인, 서비스 이용 약관, 접근 권한, 메인, 전시 목록, 관심 목록, 프로필 등 UI 구현
  <br />&nbsp;&nbsp; - &nbsp;모바일 하드웨어 뒤로가기 Webview에 적용
  <br />&nbsp;&nbsp; - &nbsp;메인 배너, 리뷰 슬라이드 기능 (Swiper 라이브러리 사용)
  <br />&nbsp;&nbsp; - &nbsp;안드로이드 위치, 사진첩, 알림, 달력 권한 설정 기능
  <br />&nbsp;&nbsp; - &nbsp;안드로이드 달력 연동한 전시 일정 추가 기능 (react-native-calendar-events 라이브러리 사용)
</details>
<details>
  <summary><b>[ 2024. 5. 3. ] UI, 기능 구현 (2차)</b></summary>
  &nbsp;&nbsp; - &nbsp;Lazy loading 기능 구현
  <br />&nbsp;&nbsp; - &nbsp;캘린더 선택 UI 변경
  <br />&nbsp;&nbsp; - &nbsp;프로필 수정 페이지 UI 구현
</details>