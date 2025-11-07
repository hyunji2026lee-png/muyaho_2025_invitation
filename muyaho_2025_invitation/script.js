// 부드러운 스크롤, 버튼 클릭 이벤트 등을 넣고 싶으면 여기에 작성
console.log("카드 템플릿 로드 완료!");

// 예: 페이지 내 앵커 스크롤 부드럽게 이동
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const target = document.querySelector(targetID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});