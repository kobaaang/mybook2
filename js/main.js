window.addEventListener('DOMContentLoaded', function () {
   // 로컬 스토리지에서 저장된 현재 책 데이터 가져오기
   const nowBookData = JSON.parse(localStorage.getItem('nowBookData'));

   if (nowBookData) {
      // 현재 콘텐츠 영역 선택
      var contentWrap = document.querySelector('.section1_1');

      // 새로운 책 데이터 반복 처리
      for (let i = 0; i < nowBookData.length; i++) {
         const currentBook = nowBookData[i];

         // 이미지 태그 추가
         const img = document.createElement('img');
         img.className = 'thumbnail';
         img.src = currentBook.thumbnail;

         // 콘텐츠 요소 추가
         const content = document.createElement('div');
         content.className = 'content';
         content.appendChild(img);

         // 제목 추가
         const title = document.createElement('h1');
         title.textContent = currentBook.title;
         content.appendChild(title);

         contentWrap.appendChild(content);
      }
   }
});







// transform: translateX(-368px);
// 슬라이드 만들기 드래그
$('.next').on('click',function(){
   $('.section1_1').css('transform','translateX(-368px)')
})



let currentPosition = 0;
let movementAmount = -368;

$('.next').on('click', function () {
   currentPosition += movementAmount;
   $('.section1_1').css('transform', 'translateX(' + currentPosition + 'px)');
});

$('.prev').on('click', function () {
   currentPosition -= movementAmount;
   $('.section1_1').css('transform', 'translateX(' + currentPosition + 'px)');
});


$('.timeChange').on('click',function(){
   $('.section4').addClass('active')
})

$('.section1').on('click', function(e) {
   if ($(e.target).closest('.section4').length === 0) {
      $('.section4').removeClass('active');
   }
});



//text변경
$('.time1').on('click', function() {
   $('.time').html('아무도 날 막을 수 없다');
   $('.time1 a').css('color','#2A5137');
   $('.time1 a').css('fontWeight','bold');
});
$('.time2').on('click', function() {
   $('.time').html('10분');
   $('.time2 a').css('color','#2A5137');
   $('.time2 a').css('fontWeight','bold');

});
$('.time3').on('click', function() {
   $('.time').html('30분');
   $('.time3 a').css('color','#2A5137');
   $('.time3 a').css('fontWeight','bold');

});
$('.time4').on('click', function() {
   $('.time').html('1시간');
   $('.time4 a').css('color','#2A5137');
   $('.time4 a').css('fontWeight','bold');

});
$('.time5').on('click', function() {
   $('.time').html('2시간');
   $('.time5 a').css('color','#2A5137');
   $('.time5 a').css('fontWeight','bold');

});
