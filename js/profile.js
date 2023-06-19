window.addEventListener('DOMContentLoaded', function () {
   // 콘텐츠 영역 생성 함수
   function createContentWrap(className, data, storageKey) {
      const contentWrap = document.querySelector(className);
      contentWrap.innerHTML = '';

      for (let i = 0; i < data.length; i++) {
         const currentBook = data[i];

         // 이미지 태그 추가
         const img = document.createElement('img');
         img.className = 'thumbnail';
         img.src = currentBook.thumbnail;

         // 콘텐츠 요소 추가
         const content = document.createElement('div');
         content.className = 'content';
         content.appendChild(img);
         content.setAttribute('data-index', i);

         // 콘텐츠 클릭 이벤트 처리
         content.addEventListener('click', function () {
            showModal(currentBook, storageKey, content);
         });

         contentWrap.appendChild(content);
      }
   }

   // 현재 읽고 있는 책 데이터 가져오기
   var nowBookData = JSON.parse(localStorage.getItem('nowBookData'));
   if (nowBookData) {
      // 현재 읽고 있는 책 콘텐츠 영역 생성
      createContentWrap('.section3_2', nowBookData, 'nowBookData');
   }
   // 나중에 읽을 책 데이터 가져오기
   var laterBookData = JSON.parse(localStorage.getItem('laterBookData'));
   if (laterBookData) {
      // 나중에 읽을 책 콘텐츠 영역 생성
      createContentWrap('.section3_1', laterBookData, 'laterBookData');
   }

   // 읽은 책 데이터 가져오기
   var finishBookData = JSON.parse(localStorage.getItem('finishBookData'));
   if (finishBookData) {
      // 읽은 책 콘텐츠 영역 생성
      createContentWrap('.section3_3', finishBookData, 'finishBookData');
   }

   // 모달 창 표시 함수
   function showModal(book, storageKey, contentElement) {
      // 모달 창 엘리먼트 생성
      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const buttonWrapper = document.createElement('div'); // 버튼들을 감싸는 div
      buttonWrapper.className = 'button-wrapper';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'modal-delete';
      deleteButton.textContent = '삭제';

      const closeButton = document.createElement('button');
      closeButton.className = 'modal-close';
      closeButton.textContent = '닫기';

      const title = document.createElement('h1');
      title.textContent = book.title;

      const img = document.createElement('img');
      img.className = 'modal-thumbnail';
      img.src = book.thumbnail;


      modalContent.appendChild(title);
      modalContent.appendChild(img);
      modalOverlay.appendChild(modalContent);
      buttonWrapper.appendChild(deleteButton);
      buttonWrapper.appendChild(closeButton);
      modalContent.appendChild(buttonWrapper);

      // 모달 창 닫기 버튼 클릭 이벤트 처리
      closeButton.addEventListener('click', function () {
         modalOverlay.remove();
      });

      // 삭제 버튼 클릭 이벤트 처리
      deleteButton.addEventListener('click', function () {
         const index = contentElement.getAttribute('data-index');
         const data = JSON.parse(localStorage.getItem(storageKey));

         // 데이터에서 해당 인덱스의 항목 삭제
         data.splice(index, 1);
         localStorage.setItem(storageKey, JSON.stringify(data));

         // 콘텐츠 요소 제거
         contentElement.remove();

         // 모달 창 제거
         modalOverlay.remove();
      });

      // 모달 창을 body에 추가
      document.body.appendChild(modalOverlay);
   }
});
