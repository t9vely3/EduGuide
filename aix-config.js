// Firebase Console > 프로젝트 설정 > 내 앱 > 웹 앱의 firebaseConfig 값을 복사합니다.
// 기존 설정이 있다면 이 예시로 덮어쓰지 말고 기존 값을 유지하세요.
window.AIX_CONFIG = {
  brand: "SBS아카데미 AIX 홍대",
  phone: "", // 학원 전화번호
  kakao: "", // 실제 카카오톡 채널 채팅 URL
  place: "홍대입구역 근처",
  siteUrl: "", // 비워 두면 현재 주소 사용. 직접 입력 시 https://도메인/폴더/index.html
  firebase: {
    apiKey: "", // Firebase 웹 앱 설정의 apiKey
    authDomain: "", // Firebase 웹 앱 설정의 authDomain
    projectId: "", // Firebase 프로젝트 ID
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
