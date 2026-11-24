/* ===== SBS AIX 홍대 안내 사이트 · 링크 관리 공용 설정 =====
   이 파일 하나만 고치면 안내 사이트 10개(index.html, ai.html ...)와 링크 관리 사이트(admin.html)에 함께 적용됩니다.
   모든 파일을 같은 폴더에 올려 주세요. */
window.AIX_CONFIG = {
  // Firebase 설정 (Firebase 콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정의 firebaseConfig 값을 그대로 붙여 넣기)
  // 예: firebase: { apiKey: "AIza...", authDomain: "xxx.firebaseapp.com", projectId: "xxx", appId: "1:..." },
  firebase: null,

  phone: "",      // 학원 대표번호. 예: "02-000-0000" (비워 두면 "02로 시작하는 학원 번호"로 안내)
  kakao: "",      // 카카오톡 채널 채팅 링크. 예: "https://pf.kakao.com/_xxxx/chat"
  siteUrl: ""     // 파일들이 있는 폴더 주소. 예: "https://t9vely3.github.io/guide/" (비워 두면 지금 주소 기준)
};
