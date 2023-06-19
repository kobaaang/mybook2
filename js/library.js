document.addEventListener('DOMContentLoaded', function() {
   // 모달 창 띄우기
   function showModal(book, contentElement) {
      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const buttonWrapper = document.createElement('div');
      buttonWrapper.className = 'button-wrapper';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Delete';

      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.textContent = 'Close';

      //새로 추가하는 다른 배열로 넘기는 버튼
      const nextButton = document.createElement('button');
      nextButton.className = 'next-button';
      // nextButton.textContent = '읽을래!';
      //버튼 end

      const img = document.createElement('img');
      img.className = 'modal-thumbnail';
      img.src = book.thumbnail;

      const inner = document.createElement('div');
      inner.className = 'inner';

      const title = document.createElement('h1');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = book.authors;

      const publisher = document.createElement('p');
      publisher.textContent = book.publisher;

      inner.appendChild(title);
      inner.appendChild(author);
      inner.appendChild(publisher);

      modalContent.appendChild(img);
      modalContent.appendChild(inner);
      modalContent.appendChild(buttonWrapper);
      buttonWrapper.appendChild(deleteButton);
      buttonWrapper.appendChild(closeButton);
      // buttonWrapper.appendChild(nextButton);
      modalOverlay.appendChild(modalContent);

      // 모달 창 닫기 버튼 클릭 이벤트 처리
      closeButton.addEventListener('click', function () {
         modalOverlay.remove();
      });

      // 삭제 버튼 클릭 이벤트 처리
      deleteButton.addEventListener('click', function () {
         const index = contentElement.getAttribute('data-index');
         const storageKey = contentElement.getAttribute('data-storage-key');
         const data = JSON.parse(localStorage.getItem(storageKey));

         // 데이터에서 해당 인덱스의 항목 삭제
         data.splice(index, 1);
         localStorage.setItem(storageKey, JSON.stringify(data));

         // 콘텐츠 요소 제거
         contentElement.remove();

         // 모달 창 제거
         modalOverlay.remove();
      });
      nextButton.addEventListener('click',function(){
         
      })

      // next 버튼 클릭 이벤트 처리하기

      // 모달 창을 body에 추가
      document.body.appendChild(modalOverlay);
   }

   


   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   const nowBookData = JSON.parse(localStorage.getItem('nowBookData'));

   if (nowBookData) {
      // 기존 콘텐츠 초기화
      const nowContentWrap = document.querySelector('.section3_1');
      nowContentWrap.innerHTML = '';

      for (let i = 0; i < nowBookData.length; i++) {
         const currentBook = nowBookData[i];

         // 타이틀 태그 추가
         const title = document.createElement('h1');
         title.textContent = currentBook.title;
         title.className = 'title';

         // 이미지 태그 추가
         const nowImg = document.createElement('img');
         nowImg.className = 'thumbnail';
         nowImg.src = currentBook.thumbnail;

         // 작가 요소 추가
         const nowAuthor = document.createElement('p');
         nowAuthor.textContent = currentBook.authors;
         nowAuthor.className = 'author';

         // 출판사 요소 추가
         const nowPublisher = document.createElement('p');
         nowPublisher.textContent = currentBook.publisher;
         nowPublisher.className = 'publisher';

         // 콘텐츠 요소 추가
         const nowContent = document.createElement('div');
         nowContent.className = 'content';
         nowContent.appendChild(nowImg);

         const inner = document.createElement('div');
         inner.className = 'inner';
         inner.appendChild(title);
         inner.appendChild(nowAuthor);
         inner.appendChild(nowPublisher);
         nowContent.appendChild(inner);

         nowContent.setAttribute('data-index', i);
         nowContent.setAttribute('data-storage-key', 'nowBookData');
         nowContent.addEventListener('click', function () {
            showModal(currentBook, nowContent);
         });

         nowContentWrap.appendChild(nowContent);
      }
   }

   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   const laterBookData = JSON.parse(localStorage.getItem('laterBookData'));

   if (laterBookData) {
      // 기존 콘텐츠 초기화
      const laterContentWrap = document.querySelector('.section3_2');
      laterContentWrap.innerHTML = '';

      for (let i = 0; i < laterBookData.length; i++) {
         const currentBook = laterBookData[i];

         // 타이틀 태그 추가
         const title = document.createElement('h1');
         title.textContent = currentBook.title;
         title.className = 'title';

         // 이미지 태그 추가
         const laterImg = document.createElement('img');
         laterImg.className = 'thumbnail';
         laterImg.src = currentBook.thumbnail;

         // 작가 요소 추가
         const laterAuthor = document.createElement('p');
         laterAuthor.textContent = currentBook.authors;
         laterAuthor.className = 'author';

         // 출판사 요소 추가
         const laterPublisher = document.createElement('p');
         laterPublisher.textContent = currentBook.publisher;
         laterPublisher.className = 'publisher';

         // 콘텐츠 요소 추가
         const laterContent = document.createElement('div');
         laterContent.className = 'content';
         laterContent.appendChild(laterImg);

         const inner = document.createElement('div');
         inner.className = 'inner';
         inner.appendChild(title);
         inner.appendChild(laterAuthor);
         inner.appendChild(laterPublisher);
         laterContent.appendChild(inner);

         laterContent.setAttribute('data-index', i);
         laterContent.setAttribute('data-storage-key', 'laterBookData');
         laterContent.addEventListener('click', function () {
            showModal(currentBook, laterContent);
         });

         laterContentWrap.appendChild(laterContent);
      }
   }

   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   const finishBookData = JSON.parse(localStorage.getItem('finishBookData'));
 
   if (finishBookData) {
      // 기존 콘텐츠 초기화
      const finishContentWrap = document.querySelector('.section3_3');
      finishContentWrap.innerHTML = '';

      for (let i = 0; i < finishBookData.length; i++) {
         const currentBook = finishBookData[i];

         // 타이틀 태그 추가
         const title = document.createElement('h1');
         title.textContent = currentBook.title;
         title.className = 'title';

         // 이미지 태그 추가
         const finishImg = document.createElement('img');
         finishImg.className = 'thumbnail';
         finishImg.src = currentBook.thumbnail;

         // 작가 요소 추가
         const finishAuthor = document.createElement('p');
         finishAuthor.textContent = currentBook.authors;
         finishAuthor.className = 'author';

         // 출판사 요소 추가
         const finishPublisher = document.createElement('p');
         finishPublisher.textContent = currentBook.publisher;
         finishPublisher.className = 'publisher';

         // 콘텐츠 요소 추가
         const finishContent = document.createElement('div');
         finishContent.className = 'content';
         finishContent.appendChild(finishImg);

         const inner = document.createElement('div');
         inner.className = 'inner';
         inner.appendChild(title);
         inner.appendChild(finishAuthor);
         inner.appendChild(finishPublisher);
         finishContent.appendChild(inner);

         finishContent.setAttribute('data-index', i);
         finishContent.setAttribute('data-storage-key', 'finishBookData');
         finishContent.addEventListener('click', function () {
            showModal(currentBook, finishContent);
         });

         finishContentWrap.appendChild(finishContent);
      }
   }

   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   const bookData = JSON.parse(localStorage.getItem('bookData'));

   if (bookData) {
      // 기존 콘텐츠 초기화
      const contentWrap = document.querySelector('.section3_4');
      contentWrap.innerHTML = '';

      for (let i = 0; i < bookData.length; i++) {
         const currentBook = bookData[i];

         // 타이틀 태그 추가
         const title = document.createElement('h1');
         title.textContent = currentBook.title;
         title.className = 'title';

         // 이미지 태그 추가
         const img = document.createElement('img');
         img.className = 'thumbnail';
         img.src = currentBook.thumbnail;

         // 작가 요소 추가
         const author = document.createElement('p');
         author.textContent = currentBook.authors;
         author.className = 'author';

         // 출판사 요소 추가
         const publisher = document.createElement('p');
         publisher.textContent = currentBook.publisher;
         publisher.className = 'publisher';

         // 콘텐츠 요소 추가
         const content = document.createElement('div');
         content.className = 'content';
         content.appendChild(img);

         const inner = document.createElement('div');
         inner.className = 'inner';
         inner.appendChild(title);
         inner.appendChild(author);
         inner.appendChild(publisher);
         content.appendChild(inner);

         content.setAttribute('data-index', i);
         content.setAttribute('data-storage-key', 'bookData');
         content.addEventListener('click', function () {
            showModal(currentBook, content);
         });

         contentWrap.appendChild(content);
      }
   }
});
